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
    UserCategorySchedule,
    Prayer,
)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False


class PrayerInline(admin.StackedInline):
    model = Prayer
    max_num = 1
    fields = ("date", "completed")
    readonly_fields = ("date",)


class UserCardInline(admin.TabularInline):
    model = UserCard
    can_delete = True
    fields = ("card", "use_count", "count_adjustment", "answered", "hidden")
    readonly_fields = ("card", "use_count")
    extra = 0
    sortable_by = ("card__category", "use_count", "answered", "hidden")
    search_fields = ("card__title",)


class UserCategoryScheduleInline(admin.TabularInline):
    model = UserCategorySchedule
    can_delete = False
    max_num = 0
    fields = ("category", "sun", "mon", "tue", "wed", "thu", "fri", "sat")
    readonly_fields = ("category",)


class UserAdmin(BaseUserAdmin):
    list_prefetch_related = ("userprofile", "usercard", "usercategoryschedule", "prayer")
    inlines = [
        UserProfileInline,
        PrayerInline,
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
