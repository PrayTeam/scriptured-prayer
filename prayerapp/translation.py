from modeltranslation.translator import register, TranslationOptions
from .models import Card, BibleVersion

@register(Card)
class CardTranslationOptions(TranslationOptions):
    fields = ('title', 'scripture', 'description', "version")

@register(BibleVersion)
class BibleVersionTranslationOptions(TranslationOptions):
    fields = ("name", "copyright_notice")