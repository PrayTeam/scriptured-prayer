from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User


class Category(models.TextChoices):
    NAMES_OF_GOD = "NG", _("Names of God")
    GOD_IS = "GI", _("God Is ...")
    NAMES_OF_JESUS = "NJ", _("Names of Jesus")
    NAMES_OF_THE_HOLY_SPIRIT = "NS", _("Names of the Holy Spirit")
    IN_CHRIST = "IC", _("In Christ")
    PROMISES_OF_GOD = "PG", _("Promises of God")
    STONES_OF_REMEMBRANCE = "SR", _("Stones of Remembrance")
    BREATH_PRAYERS = "BP", _("Breath Prayers")
    PRAYERS_OF_THE_BIBLE = "PR", _("Prayers of the Bible")


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True
    )
    cards_per_day = models.IntegerField(default=10)

    def __str__(self) -> str:
        return f"User profile: {self.user.username}"


class Card(models.Model):
    category = models.CharField(max_length=2, choices=Category.choices)
    title = models.CharField(max_length=200)
    scripture = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    private = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.title} - {self.scripture} ({self.category})"


class UserCard(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    use_count = models.IntegerField(default=0)
    count_adjustment = models.IntegerField(default=0)
    answered = models.BooleanField(default=False)
    hidden = models.BooleanField(default=False)
    
    class Meta:
        unique_together = ["user", "card"]

    def priority(self) -> int:
        """Metric for selecting usercards to display"""
        return self.use_count + self.count_adjustment

    def __str__(self) -> str:
        return f"{self.user.username} - {self.card.title} ({self.use_count})"


class UserCardNote(models.Model):
    usercard = models.ForeignKey(UserCard, on_delete=models.CASCADE)
    note = models.CharField(max_length=200)
    date = models.DateTimeField("date created", auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.usercard.user.username} - {self.usercard.card.title} Note {self.id} - {self.date}"


class UserCategorySchedule(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(max_length=2, choices=Category.choices)
    sun = models.BooleanField(default=False)
    mon = models.BooleanField(default=False)
    tue = models.BooleanField(default=False)
    wed = models.BooleanField(default=False)
    thu = models.BooleanField(default=False)
    fri = models.BooleanField(default=False)
    sat = models.BooleanField(default=False)

    class Meta:
        unique_together = ["user", "category"]

    def __str__(self) -> str:
        return f"{self.user.username} - {self.category}"


class Prayer(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateField("date created", auto_now_add=True)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.user.username} prayer on {self.date}"


class PrayerUserCard(models.Model):
    prayer = models.ForeignKey(Prayer, on_delete=models.CASCADE)
    usercard = models.ForeignKey(UserCard, on_delete=models.CASCADE)
    used = models.BooleanField(default=False)

    class Meta:
        unique_together = ["prayer", "usercard"]

    def __str__(self) -> str:
        status = "used" if self.used else "not used"
        return f"{self.prayer.user.username} - {self.usercard.card.title} {status}"


## Signals ##


@receiver(post_save, sender=Card)
def create_usercards_for_card(instance, created, **kwargs):
    """When a new card is created, create a UserCard for each user."""
    if created:
        for user in User.objects.all():
            usercard = UserCard.objects.create(user=user, card=instance)
            usercard.save()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_related_objects_for_user(instance, created, **kwargs):
    """When a new user is created, create a UserCard for each non-private card."""
    if created:
        for card in Card.objects.filter(private=False):
            usercard = UserCard.objects.create(user=instance, card=card)
            usercard.save()
        for category in Category:
            userschedule = UserCategorySchedule.objects.create(
                user=instance, category=category
            )
            userschedule.save()
        userprofile = UserProfile.objects.create(user=instance)
        userprofile.save()


@receiver(pre_save, sender=Prayer)
def finalize_old_prayers(instance, **kwargs):
    """When a new prayer is created, clean up previous prayers."""
    for prayer in Prayer.objects.filter(user=instance.user, completed=False):
        prayer.delete()

    PrayerUserCard.objects.filter(usercard__user=instance.user).delete()


@receiver(post_save, sender=Prayer)
def create_prayer_usercards(instance, created, **kwargs):
    """When a new prayer is created, create PrayerUserCards"""
    if created:
        match instance.date.weekday():
            case 6:  # Sunday
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, sun=True
                )
            case 0:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, mon=True
                )
            case 1:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, tue=True
                )
            case 2:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, wed=True
                )
            case 3:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, thu=True
                )
            case 4:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, fri=True
                )
            case 5:
                categories = UserCategorySchedule.objects.filter(
                    user=instance.user, sat=True
                )

        # Get the average use_count for each category to use with generating the prayer cards
        utilization = {}
        for category in categories:
            utilization[category.category] = (
                UserCard.objects.filter(
                    user=instance.user,
                    card__category=category.category,
                    answered=False,
                    hidden=False,
                ).aggregate(models.Avg("use_count"))["use_count__avg"]
                or 0
            )

        last_index = {category: 0 for category in utilization}
        # Create the prayer usercards evenly for each category with slight preference for lover use_counts
        while PrayerUserCard.objects.filter(prayer=instance).count() < instance.user.userprofile.cards_per_day:
            category_count = len(utilization)
            if category_count == 0:
                break
            current_category = 0
            for category in [cat for cat in sorted(utilization, key=utilization.get, reverse=True)]:
                current_category += 1
                card_count = instance.user.userprofile.cards_per_day - PrayerUserCard.objects.filter(prayer=instance).count() // category_count + (
                    1
                    if current_category
                    <= instance.user.userprofile.cards_per_day - PrayerUserCard.objects.filter(prayer=instance).count() % category_count
                    else 0
                )
                usercards = UserCard.objects.filter(
                    user=instance.user,
                    card__category=category,
                    answered=False,
                    hidden=False,
                ).order_by("-use_count")[last_index[category]:card_count]
                for usercard in usercards:
                    prayerusercard = PrayerUserCard.objects.create(
                        prayer=instance, usercard=usercard
                    )
                    prayerusercard.save()
                last_index[category] = len(usercards)
                if len(usercards) < card_count:
                    del utilization[category]
