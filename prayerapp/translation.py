from modeltranslation.translator import register, TranslationOptions
from .models import Card

@register(Card)
class CardTranslationOptions(TranslationOptions):
    fields = ('title', 'scripture', 'description')