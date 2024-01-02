from typing import Any

from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import ListView, TemplateView, UpdateView

from .forms import UserCardNoteFormSet, UserCategoryOptionsFormSet, UserProfileForm
from .models import UserCard, UserCategoryOptions, UserProfile


class IndexView(TemplateView):
    template_name = "prayerapp/index.html"


class UserCardListView(LoginRequiredMixin, ListView):
    model = UserCard
    template_name = "prayerapp/usercard_list.html"

    def get_queryset(self):
        return (
            UserCard.objects.filter(user=self.request.user)
            .order_by("card__category", "card__title")
            .select_related("card")
        )


class UserCardDetailView(LoginRequiredMixin, UpdateView):
    model = UserCard
    fields = ["answered", "hidden"]
    template_name = "prayerapp/usercard_detail.html"

    def is_valid(self) -> bool:
        return self.object.user == self.request.user

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["usercardnotes_formset"] = UserCardNoteFormSet(instance=self.object)
        return context

    def form_valid(self, form):
        formset = UserCardNoteFormSet(
            self.request.POST,
            instance=self.object,
            form_kwargs={"request": self.request},
        )
        if formset.is_valid():
            formset.save()

        return super().form_valid(form)

    def get_success_url(self) -> str:
        return reverse("prayerapp:usercard_detail", kwargs={"pk": self.object.pk})


class PrayerDeckView(LoginRequiredMixin, ListView):
    model = UserCard
    template_name = "prayerapp/prayerdeck.html"

    def get_queryset(self, queryset=None):
        return UserCard.objects.filter(user=self.request.user, in_prayer_deck=True)


class UserProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = UserProfile
    form_class = UserProfileForm

    def get_object(self, queryset=None):
        userprofile, created = UserProfile.objects.get_or_create(user=self.request.user)
        return userprofile

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categoryformset"] = UserCategoryOptionsFormSet(
            queryset=UserCategoryOptions.objects.filter(user=self.request.user)
        )
        return context

    def form_valid(self, form):
        form = UserProfileForm(
            self.request.POST, request=self.request, instance=self.object
        )
        formset = UserCategoryOptionsFormSet(
            self.request.POST,
            queryset=UserCategoryOptions.objects.filter(user=self.request.user),
            form_kwargs={"request": self.request},
        )
        if formset.is_valid():
            formset.save()

        return super().form_valid(form)

    def get_success_url(self) -> str:
        return reverse("prayerapp:userprofile_update")