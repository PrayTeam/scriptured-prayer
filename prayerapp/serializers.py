import re
from rest_framework import serializers
from .models import UserCard, BibleVerse, BibleBook, BibleVersion, CardScriptureJson, Card, Category
from django.db.models.signals import post_save
from django.dispatch import receiver
from typing import Any

class BibleVerseSerializer(serializers.ModelSerializer):
    book = serializers.SerializerMethodField()
    class Meta:
        model = BibleVerse
        fields = ["book", "chapter", "verse", "text"]

    def get_book(self, obj):
        return obj.get_book_display()


class CardSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    genre = serializers.SlugRelatedField(slug_field="genre", read_only=True, source="category")
    version = serializers.SlugRelatedField(slug_field="abbreviation", read_only=True, source="bibleversion")
    scripture_text = serializers.SerializerMethodField()
    copyright_notice = serializers.SlugRelatedField(slug_field="copyright_notice", read_only=True, source="bibleversion")
    instruction = serializers.SerializerMethodField()
    class Meta:
        model = Card
        fields = ["id", "title", "scripture", "version", "scripture_text", "description", "copyright_notice", "category", "genre", "instruction"]
        read_only_fields = ["id", "card"]
    
    def get_scripture_text(self, obj):
        return obj.cardscripturejson_set.filter(bible_version=obj.version)[0].passage_json

    def get_instruction(self, obj):
        return obj.instruction if obj.instruction else obj.category.default_instruction

#-------
class UserCardSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    genre = serializers.SerializerMethodField()
    title = serializers.SlugRelatedField(slug_field="title", read_only=True, source="card")
    version = serializers.SerializerMethodField()
    description = serializers.SlugRelatedField(slug_field="description", read_only=True, source="card")
    scripture = serializers.SlugRelatedField(slug_field="scripture", read_only=True, source="card")
    scripture_text = serializers.SerializerMethodField()
    copyright_notice = serializers.SerializerMethodField()
    instruction = serializers.SerializerMethodField()
    usercardnote_set = serializers.SlugRelatedField(slug_field="note", many=True, read_only=True)
    class Meta:
        model = UserCard
        fields = ["id", "title", "scripture", "version", "scripture_text", "description", "copyright_notice", "category", "genre", "usercardnote_set", "answered", "hidden", "in_prayer_deck", "last_prayed", "instruction"]
        read_only_fields = ["id", "card"]
    
    def get_version(self, obj):
        return obj.card.version.abbreviation
    
    def get_copyright_notice(self, obj):
        return obj.card.version.copyright_notice
    
    def get_category(self, obj):
        return obj.card.category.name
    
    def get_genre(self, obj):
        return obj.card.category.get_genre_display()
    
    def get_scripture_text(self, obj):
        return obj.card.cardscripturejson_set.filter(bible_version=obj.card.version)[0].passage_json

    def get_instruction(self, obj):
        return obj.card.instruction if obj.card.instruction else obj.card.category.default_instruction
class CategorySerializer(serializers.ModelSerializer):
    card_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ["id", "name", "genre", "card_count", "inspiration", "default_instruction"]
        read_only_fields = ["id", "card_count"]

    def get_card_count(self, obj):
        if "user" in self.context:
            return obj.usercard_set.filter(user=self.context["user"]).count()
        return obj.card_set.count()

@receiver(post_save, sender=Card)
def create_CardScriptureJson_for_card(instance, created, **kwargs):
    """When a new card is created, create a CardScriptureJson for each bible version."""
    for version in BibleVersion.objects.all():
        passage_json = get_scripture_text(instance, version)
        card_scripture, created = CardScriptureJson.objects.get_or_create(
            card=instance,
            bible_version=version,
            defaults={'passage_json': passage_json},
        )
        if not created:
            card_scripture.passage_json = passage_json
        card_scripture.save()


@receiver(post_save, sender=BibleVersion)
def create_CardScriptureJson_for_bibleversion(instance: BibleVersion, created: bool, **kwargs) -> None:
    """When a new bible version is created, create a CardScriptureJson for each card."""
    for card in Card.objects.all():
        passage_json = get_scripture_text(card, instance)
        CardScriptureJson, created = CardScriptureJson.objects.get_or_create(
            card=card,
            bible_version=instance,
            defaults={'passage_json': passage_json},
        )
        if not created:
            CardScriptureJson.passage_json = passage_json
        CardScriptureJson.save()

## Helper functions ##

def get_scripture_text(card: Card, bible_version: BibleVersion) -> Any:
    """Get the scripture text for a card in a given bible version.

    Args:
        card : The Card object
        bible_version: The BibleVersion object

    Returns: A JSON string containing the scripture text.
    """

    verses = BibleVerse.objects.none()
    for ref in card.scripture_en.split(";"):
        if ref.strip():
            if ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)$", ref.strip()):
                book = get_book_abbreviation(ref_match.group(1))
                chapter = int(ref_match.group(2))
                verse = int(ref_match.group(3))
                verses |= BibleVerse.objects.filter(book=book, chapter=chapter, verse=verse, version=bible_version)
            elif ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)-([0-9]+)$", ref.strip()):
                book = get_book_abbreviation(ref_match.group(1))
                chapter = int(ref_match.group(2))
                verse_start = int(ref_match.group(3))
                verse_end = int(ref_match.group(4))
                verses |= BibleVerse.objects.filter(book=book, chapter=chapter, verse__gte=verse_start, verse__lte=verse_end, version=bible_version)
            elif ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)-([0-9]+):([0-9]+)$", ref.strip()):
                book = get_book_abbreviation(ref_match.group(1))
                chapter_start = int(ref_match.group(2))
                verse_start = int(ref_match.group(3))
                chapter_end = int(ref_match.group(4))
                verse_end = int(ref_match.group(5))
                if chapter_start == chapter_end:
                    verses |= BibleVerse.objects.filter(book=book, chapter=chapter_start, verse__gte=verse_start, verse__lte=verse_end, version=bible_version)
                elif chapter_start < chapter_end:
                    verses |= BibleVerse.objects.filter(book=book, chapter=chapter_start, verse__gte=verse_start, version=bible_version)
                    chapter_start += 1
                    while chapter_start < chapter_end:
                        verses |= BibleVerse.objects.filter(book=book, chapter=chapter_start, version=bible_version)
                        chapter_start += 1
                    verses |= BibleVerse.objects.filter(book=book, chapter=chapter_end, verse__lte=verse_end, version=bible_version)
    return BibleVerseSerializer(verses, many=True).data


def get_book_abbreviation(long_name: str) -> str:
    """Get the abbreviation for a book of the Bible from an unambiguous string

    Args:
        long_name: The long name of the book of the bible

    Returns:
        str: three character abbreviation for the book of the bible
    """
    sane_long_name = long_name.replace(" ", "").upper()
    for abbreviation, book in BibleBook.choices:
        if sane_long_name == abbreviation:
            return abbreviation
        if sane_long_name == book.replace(" ", "").upper()[:len(sane_long_name)]:
            return abbreviation