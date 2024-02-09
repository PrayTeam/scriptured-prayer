from modeltranslation.translator import register, TranslationOptions
from .models import Card, BibleVersion, Category

@register(Card)
class CardTranslationOptions(TranslationOptions):
    fields = ('title', 'scripture', 'description', "version", "instruction")

@register(BibleVersion)
class BibleVersionTranslationOptions(TranslationOptions):
    fields = ("name", "copyright_notice")

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ("name", "inspiration", "default_instruction")