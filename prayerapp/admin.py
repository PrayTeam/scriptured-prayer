from typing import Any
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
    UserCardPrayedLog,
)

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    fk_name = "user"
    can_delete = False
    readonly_fields = ("user", "prayer_deck_last_updated", "created_date", "modified_date")


class UserCardInline(admin.TabularInline):
    model = UserCard
    fk_name = "user"
    can_delete = False
    fields = ("card", "in_prayer_deck", "answered", "hidden", "last_prayed")
    readonly_fields = ("card", )
    extra = 0
    sortable_by = ("card__category", "answered", "hidden")
    search_fields = ("card__title",)


class UserCategoryOptionsInline(admin.TabularInline):
    model = UserCategoryOptions
    fk_name = "user"
    can_delete = False
    max_num = 0
    fields = ("category", "enabled", "pray_all_cards")
    readonly_fields = ("category",)


class UserAdmin(BaseUserAdmin):
    list_prefetch_related = ("userprofile", "usercard", "usercategoryschedule", "prayer")
    inlines = [
        UserProfileInline,
        UserCategoryOptionsInline,
        UserCardInline,
    ]

    def save_formset(self, request: Any, form: Any, formset: Any, change: Any) -> None:
        # All of the inline formsets have the created_by and modified_by fields
        instances = formset.save(commit=False)
        for instance in instances:
            if instance.pk is None:
                instance.created_by = request.user
            instance.modified_by = request.user
            instance.save()
        return super().save_formset(request, form, formset, change)


admin.site.unregister(User)  # So that we can add the inlines above
admin.site.register(User, UserAdmin)


@admin.register(Card)
class CardAdmin(TranslationAdmin):
    list_display = ("title", "scripture", "category")
    list_filter = ("category",)
    search_fields = ("title", "scripture", "text")

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.created_by = request.user
        obj.modified_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(UserCard)
class UserCardAdmin(admin.ModelAdmin):
    fk_name = 'user'

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.created_by = request.user
        obj.modified_by = request.user
        super().save_model(request, obj, form, change)

@admin.register(UserCardPrayedLog)
class UserCardPrayedLogAdmin(admin.ModelAdmin):
    list_display = ("usercard", "date_prayed")
    list_filter = ("usercard__card__category", "usercard__user")
    sortable_by = ("usercard__card__category", "usercard__user", 'date_prayed')
    readonly_fields = ("usercard", "date_prayed")