import re
from rest_framework import serializers
from .models import UserCard, UserCardNote, BibleVerse, BibleBook, BibleVersion
from django.utils.translation import get_language

class BibleVerseSerializer(serializers.ModelSerializer):
    book = serializers.SerializerMethodField()
    class Meta:
        model = BibleVerse
        fields = ["book", "chapter", "verse", "text"]

    def get_book(self, obj):
        return obj.get_book_display()

class UserCardSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    genre = serializers.SerializerMethodField()
    title = serializers.SlugRelatedField(slug_field="title", read_only=True, source="card")
    version = serializers.SerializerMethodField()
    description = serializers.SlugRelatedField(slug_field="description", read_only=True, source="card")
    scripture = serializers.SlugRelatedField(slug_field="scripture", read_only=True, source="card")
    scripture_text = serializers.SerializerMethodField()
    copyright_notice = serializers.SerializerMethodField()
    usercardnote_set = serializers.SlugRelatedField(slug_field="note", many=True, read_only=False, queryset=UserCardNote.objects.all())
    class Meta:
        model = UserCard
        fields = ["id", "title", "version", "scripture", "scripture_text", "description", "copyright_notice", "category", "genre", "usercardnote_set", "answered", "hidden", "in_prayer_deck"]
        read_only_fields = ["id", "card"]
    
    def get_version(self, obj):
        return (obj.card.version or get_default_bible_version()).abbreviation
    
    def get_copyright_notice(self, obj):
        return (obj.card.version or get_default_bible_version()).copyright_notice
    
    def get_genre(self, obj):
        return obj.card.category.get_genre_display()

    def get_scripture_text(self, obj):

        verses = BibleVerse.objects.none()
        version = obj.card.version or get_default_bible_version()
        for ref in obj.card.scripture_en.split(";"):
            if ref.strip():
                if ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)$", ref.strip()):
                    book = get_book_abbreviation(ref_match.group(1))
                    chapter = int(ref_match.group(2))
                    verse = int(ref_match.group(3))
                    verses |= BibleVerse.objects.filter(book=book, chapter=chapter, verse=verse, version=version)
                elif ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)-([0-9]+)$", ref.strip()):
                    book = get_book_abbreviation(ref_match.group(1))
                    chapter = int(ref_match.group(2))
                    verse_start = int(ref_match.group(3))
                    verse_end = int(ref_match.group(4))
                    verses |= BibleVerse.objects.filter(book=book, chapter=chapter, verse__gte=verse_start, verse__lte=verse_end, version=version)
                elif ref_match := re.match(r"^([1-3]? ?[a-zA-Z]+)\.? ?([0-9]+):([0-9]+)-([0-9]+):([0-9]+)$", ref.strip()):
                    book = get_book_abbreviation(ref_match.group(1))
                    chapter_start = int(ref_match.group(2))
                    verse_start = int(ref_match.group(3))
                    chapter_end = int(ref_match.group(4))
                    verse_end = int(ref_match.group(5))
                    if chapter_start == chapter_end:
                        verses |= BibleVerse.objects.filter(book=book, chapter=chapter_start, verse__gte=verse_start, verse__lte=verse_end, version=version)
                    elif chapter_start < chapter_end:
                        verses |= BibleVerse.objects.filter(book=book, chapter=chapter_start, verse__gte=verse_start, version=version)
                        chapter_start += 1
                        while chapter_start < chapter_end:
                            verses |= verses + BibleVerse.objects.filter(book=book, chapter=chapter_start, version=version)
                            chapter_start += 1
                        verses |= BibleVerse.objects.filter(book=book, chapter=chapter_end, verse__lte=verse_end, version=version)
        return BibleVerseSerializer(verses, many=True).data
    
def get_book_abbreviation(long_name):
    sane_long_name = long_name.replace(" ", "").upper()
    for abbreviation, book in BibleBook.choices:
        if sane_long_name == abbreviation:
            return abbreviation
        if sane_long_name == book.replace(" ", "").upper()[:len(sane_long_name)]:
            return abbreviation
        
def get_default_bible_version():
    """This is a poor place to keep defaults. I did not want to query the database for this. We will call it tech debt."""
    if get_language() == "es":
        return BibleVersion.objects.get(abbreviation="RV1909")
    else:
        return BibleVersion.objects.get(abbreviation="NET")