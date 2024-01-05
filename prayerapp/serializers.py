from rest_framework import serializers
from .models import UserCard, UserCardNote

class UserCardSerializer(serializers.ModelSerializer):
    card = serializers.SlugRelatedField(slug_field="title", read_only=True)
    card_scripture = serializers.SlugRelatedField(slug_field="scripture", read_only=True)
    usercardnote_set = serializers.SlugRelatedField(slug_field="note", many=True, read_only=False, queryset=UserCardNote.objects.all())
    class Meta:
        model = UserCard
        fields = ["id", "card", "card_scripture", "usercardnote_set", "answered", "hidden", "in_prayer_deck"]
        read_only_fields = ["id", "card"]
