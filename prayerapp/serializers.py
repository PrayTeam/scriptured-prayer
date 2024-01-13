from rest_framework import serializers
from .models import UserCard, UserCardNote

class UserCardSerializer(serializers.ModelSerializer):
    title = serializers.SlugRelatedField(slug_field="title", read_only=True, source="card")
    scripture = serializers.SlugRelatedField(slug_field="scripture", read_only=True, source="card")
    description = serializers.SlugRelatedField(slug_field="description", read_only=True, source="card")
    category = serializers.SerializerMethodField()
    usercardnote_set = serializers.SlugRelatedField(slug_field="note", many=True, read_only=False, queryset=UserCardNote.objects.all())
    class Meta:
        model = UserCard
        fields = ["id", "title", "scripture", "description", "category", "usercardnote_set", "answered", "hidden", "in_prayer_deck", "last_prayed"]
        read_only_fields = ["id", "card"]

    def get_category(self, obj):
        return obj.card.get_category_display()