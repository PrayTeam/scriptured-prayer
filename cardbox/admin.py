from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Card
from modeltranslation.admin import TranslationAdmin

from .models import (
    UserCard,
    UserProfile,
    Card,
    UserCardNote,
    UserCategoryOptions,
    PrayerDeck,
    PrayerDeckUserCard,
)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False


class PrayerDeckInline(admin.StackedInline):
    model = PrayerDeck
    max_num = 1
    fields = ("date", )
    readonly_fields = ("date",)


class UserCardInline(admin.TabularInline):
    model = UserCard
    can_delete = True
    fields = ("card", "answered", "hidden")
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
        PrayerDeckInline,
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

class PrayerDeckUserCardInline(admin.TabularInline):
    model = PrayerDeckUserCard
    can_delete = True
    fields = ("date_prayed", "usercard")
   # readonly_fields = ("usercard__card", )
    extra = 0
    sortable_by = ("usercard__card__category", )



@admin.register(PrayerDeck)
class PrayerDeckAdmin(admin.ModelAdmin):
    list_display = ("user", "date")
    list_filter = ("user",)
    search_fields = ("user",)
    inlines = [ PrayerDeckUserCardInline, ]