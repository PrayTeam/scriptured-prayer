from django import forms

from .models import UserCard, UserCardNote, UserCategoryOptions, UserProfile


class UserCategoryOptionsForm(forms.ModelForm):
    class Meta:
        model = UserCategoryOptions
        fields = ["enabled", "pray_all_cards"]

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop("request", None)
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.modified_by = self.request.user
        if commit:
            instance.save()
        return instance


UserCategoryOptionsFormSet = forms.modelformset_factory(UserCategoryOptions, form=UserCategoryOptionsForm, extra=0)


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ["cards_per_day"]

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop("request", None)
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.modified_by = self.request.user
        if commit:
            instance.save()
        return instance


class UserCardNoteForm(forms.ModelForm):
    class Meta:
        model = UserCardNote
        fields = ["note"]

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop("request", None)
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.modified_by = self.request.user
        if commit:
            instance.save()
        return instance


UserCardNoteFormSet = forms.inlineformset_factory(
    UserCard, UserCardNote, fields=("note",), form=UserCardNoteForm, extra=1
)
