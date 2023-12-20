from django import forms
from .models import UserProfile, UserCard, UserCardNote, UserCategoryOptions,  PrayerDeckUserCard
from django.urls import reverse


class UserCategoryOptionsForm(forms.ModelForm):
    class Meta:
        model = UserCategoryOptions
        fields = ["enabled", "pray_all_cards"]


UserCategoryOptionsFormSet = forms.modelformset_factory(
    UserCategoryOptions, form=UserCategoryOptionsForm, extra=0
)

UserCardNoteFormSet = forms.inlineformset_factory(
    UserCard, UserCardNote, fields=("note",), extra=1
)


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ["cards_per_day"]


class UserCardNoteForm(forms.ModelForm):
    class Meta:
        model = UserCardNote
        fields = ["note"]

# This is not complete
        # I think I want the usercard, not the prayerusercard
        # need both the usercard and the prayerusercard
class PrayerForm(forms.ModelForm):
    class Meta:
        model = PrayerDeckUserCard
        fields = []
