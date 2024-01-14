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

class BibleBook(models.TextChoices):
    GENESIS = "GEN", _("Genesis")
    EXODUS = "EXO", _("Exodus")
    LEVITICUS = "LEV", _("Leviticus")
    NUMBERS = "NUM", _("Numbers")
    DEUTERONOMY = "DEU", _("Deuteronomy")
    JOSHUA = "JOS", _("Joshua")
    JUDGES = "JDG", _("Judges")
    RUTH = "RUT", _("Ruth")
    FIRST_SAMUEL = "1SA", _("1 Samuel")
    SECOND_SAMUEL = "2SA", _("2 Samuel")
    FIRST_KINGS = "1KI", _("1 Kings")
    SECOND_KINGS = "2KI", _("2 Kings")
    FIRST_CHRONICLES = "1CH", _("1 Chronicles")
    SECOND_CHRONICLES = "2CH", _("2 Chronicles")
    EZRA = "EZR", _("Ezra")
    NEHEMIAH = "NEH", _("Nehemiah")
    ESTHER = "EST", _("Esther")
    JOB = "JOB", _("Job")
    PSALMS = "PSA", _("Psalms")
    PROVERBS = "PRO", _("Proverbs")
    ECCLESIASTES = "ECC", _("Ecclesiastes")
    SONG_OF_SOLOMON = "SNG", _("Song of Solomon")
    ISAIAH = "ISA", _("Isaiah")
    JEREMIAH = "JER", _("Jeremiah")
    LAMENTATIONS = "LAM", _("Lamentations")
    EZEKIEL = "EZK", _("Ezekiel")
    DANIEL = "DAN", _("Daniel")
    HOSEA = "HOS", _("Hosea")
    JOEL = "JOL", _("Joel")
    AMOS = "AMO", _("Amos")
    OBADIAH = "OBA", _("Obadiah")
    JONAH = "JON", _("Jonah")
    MICAH = "MIC", _("Micah")
    NAHUM = "NAM", _("Nahum")
    HABAKKUK = "HAB", _("Habakkuk")
    ZEPHANIAH = "ZEP", _("Zephaniah")
    HAGGAI = "HAG", _("Haggai")
    ZECHARIAH = "ZEC", _("Zechariah")
    MALACHI = "MAL", _("Malachi")
    MATTHEW = "MAT", _("Matthew")
    MARK = "MRK", _("Mark")
    LUKE = "LUK", _("Luke")
    JOHN = "JHN", _("John")
    ACTS = "ACT", _("Acts")
    ROMANS = "ROM", _("Romans")
    FIRST_CORINTHIANS = "1CO", _("1 Corinthians")
    SECOND_CORINTHIANS = "2CO", _("2 Corinthians")
    GALATIANS = "GAL", _("Galatians")
    EPHESIANS = "EPH", _("Ephesians")
    PHILIPPIANS = "PHP", _("Philippians")
    COLOSSIANS = "COL", _("Colossians")
    FIRST_THESSALONIANS = "1TH", _("1 Thessalonians")
    SECOND_THESSALONIANS = "2TH", _("2 Thessalonians")
    FIRST_TIMOTHY = "1TI", _("1 Timothy")
    SECOND_TIMOTHY = "2TI", _("2 Timothy")
    TITUS = "TIT", _("Titus")
    PHILEMON = "PHM", _("PHILEMON")
    HEBREWS = "HEB", _("Hebrews")
    JAMES = "JAS", _("James")
    FIRST_PETER = "1PE", _("1 Peter")
    SECOND_PETER = "2PE", _("2 Peter")
    FIRST_JOHN = "1JN", _("1 John")
    SECOND_JOHN = "2JN", _("2 John")
    THIRD_JOHN = "3JN", _("3 John")
    JUDE = "JUD", _("Jude")
    REVELATION = "REV", _("Revelation")


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
    description = models.CharField(max_length=500)
    private = models.BooleanField(default=False)
    version = models.ForeignKey(
        "BibleVersion", on_delete=models.SET_NULL, null=True, blank=True
    )

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


class BibleVersion(models.Model):
    name = models.CharField(max_length=50)
    abbreviation = models.CharField(max_length=10, unique=True)
    language_code = models.CharField(max_length=2)
    copyright_notice = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f"{self.name} ({self.abbreviation})"

class BibleVerse(models.Model):
    version = models.ForeignKey(BibleVersion, on_delete=models.CASCADE)
    book = models.CharField(max_length=3, choices=BibleBook.choices)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.CharField(max_length=500)

    class Meta:
        unique_together = ["version", "book", "chapter", "verse"]

    def __str__(self) -> str:
        return f"{self.book} {self.chapter}:{self.verse} ({self.version.abbreviation})"

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