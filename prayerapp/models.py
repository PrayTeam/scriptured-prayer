from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _


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


class AuditModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="%(app_label)s_%(class)s_created_by",
        null=True,
        blank=True,
    )
    modified_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="%(app_label)s_%(class)s_modified_by",
        null=True,
        blank=True,
    )

    class Meta:
        abstract = True


class UserProfile(AuditModel):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True
    )
    cards_per_day = models.IntegerField(default=10)
    prayer_deck_last_updated = models.DateTimeField(
        "prayer deck last updated", blank=True, null=True
    )

    def __str__(self) -> str:
        return f"User profile: {self.user.username}"


class Card(AuditModel):
    category = models.CharField(max_length=2, choices=Category.choices)
    title = models.CharField(max_length=200)
    scripture = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    private = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.title} - {self.scripture} ({self.category})"


class UserCard(AuditModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    answered = models.BooleanField(default=False)
    hidden = models.BooleanField(default=False)
    last_prayed = models.DateTimeField("last prayed", blank=True, null=True)
    in_prayer_deck = models.BooleanField(default=False)

    class Meta:
        unique_together = ["user", "card"]

    def priority(self) -> int:
        """Metric for selecting usercards to display"""
        return self.use_count + self.count_adjustment

    def __str__(self) -> str:
        return f"{self.user.username} - {self.card.title})"


class UserCardNote(AuditModel):
    usercard = models.ForeignKey(UserCard, on_delete=models.CASCADE)
    note = models.CharField(max_length=200)
    date = models.DateTimeField("created timestamp", auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.usercard.user.username} - {self.usercard.card.title} Note {self.id} - {self.date}"


class UserCategoryOptions(AuditModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(max_length=2, choices=Category.choices)
    enabled = models.BooleanField(default=True)
    pray_all_cards = models.BooleanField(default=False)

    class Meta:
        unique_together = ["user", "category"]

    def __str__(self) -> str:
        return f"{self.user.username} - {self.category}"


class UserCardPrayedLog(models.Model):
    usercard = models.ForeignKey(UserCard, on_delete=models.CASCADE)
    date_prayed = models.DateTimeField(
        "date prayed", blank=True, null=True, auto_now_add=True
    )

    def __str__(self) -> str:
        return f"{self.usercard.user.username} - {self.usercard.card.title} in prayer on {self.prayerdeck.date}"


## Signals ##


@receiver(post_save, sender=Card)
def create_usercards_for_card(instance, created, **kwargs):
    """When a new card is created, create a UserCard for each user."""
    if created:
        for user in User.objects.all():
            usercard = UserCard.objects.create(
                user=user,
                card=instance,
                created_by=instance.created_by,
            )
            usercard.save()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_related_objects_for_user(instance, created, **kwargs):
    """When a new user is created, create a UserCard for each non-private card."""
    if created:
        for card in Card.objects.filter(private=False):
            usercard = UserCard.objects.create(user=instance, card=card)
            usercard.save()
        for category in Category:
            option = UserCategoryOptions.objects.create(
                user=instance, category=category
            )
            option.save()
        userprofile = UserProfile.objects.create(user=instance)
        userprofile.save()