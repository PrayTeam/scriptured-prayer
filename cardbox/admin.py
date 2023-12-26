from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Card
from modeltranslation.admin import TranslationAdmin

from .models import (
    UserCard,
    UserProfile,
    Card,
    UserCategoryOptions,
)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    readonly_fields = ("user", "prayer_deck_last_updated")


class UserCardInline(admin.TabularInline):
    model = UserCard
    can_delete = True
    fields = ("card", "answered", "hidden", "last_prayed", "in_prayer_deck")
    readonly_fields = ("card", )
    extra = 0
    sortable_by = ("card__category", "answered", "hidden")
    search_fields = ("card__title",)


class UserCategoryScheduleInline(admin.TabularInline):
    model = UserCategoryOptions
    can_delete = False
    max_num = 0
    fields = ("category", "enabled", "pray_all_cards")
    readonly_fields = ("category",)


class UserAdmin(BaseUserAdmin):
    list_prefetch_related = ("userprofile", "usercard", "usercategoryschedule", "prayer")
    inlines = [
        UserProfileInline,
        UserCategoryScheduleInline,
        UserCardInline,
    ]


admin.site.unregister(User)  # So that we can add the inlines above
admin.site.register(User, UserAdmin)


@admin.register(Card)
class CardAdmin(TranslationAdmin):
    list_display = ("title", "scripture", "category")
    list_filter = ("category",)
    search_fields = ("title", "scripture", "text")

admin.site.register(UserCard)
