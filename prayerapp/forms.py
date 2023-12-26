from django import forms
from .models import UserProfile, UserCard, UserCardNote, UserCategorySchedule,  PrayerUserCard
from django.urls import reverse


class UserCategoryScheduleForm(forms.ModelForm):
    class Meta:
        model = UserCategorySchedule
        fields = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
        widgets = {
            "sun": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "mon": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "tue": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "wed": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "thu": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "fri": forms.CheckboxInput(attrs={"class": "form-check-input"}),
            "sat": forms.CheckboxInput(attrs={"class": "form-check-input"}),
        }


UserCategoryScheduleFormSet = forms.modelformset_factory(
    UserCategorySchedule, form=UserCategoryScheduleForm, extra=0
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
        model = PrayerUserCard
        fields = []
