from typing import Any
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.utils import timezone
from django.shortcuts import render
from django.views.generic import ListView, DetailView, UpdateView, FormView, TemplateView
from .models import UserCard, UserProfile, PrayerDeck, UserCategoryOptions, PrayerDeckUserCard
from .forms import UserProfileForm, UserCategoryOptionsFormSet, UserCardNoteFormSet, PrayerForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse


class IndexView(LoginRequiredMixin, TemplateView):
    template_name = "cardbox/index.html"

class UserCardListView(LoginRequiredMixin, ListView):
    model = UserCard
    template_name = "cardbox/usercard_list.html"

    def get_queryset(self):
        return (
            UserCard.objects.filter(user=self.request.user)
            .order_by("card__category", "card__title")
            .select_related("card")
        )


class UserCardDetailView(LoginRequiredMixin, UpdateView):
    model = UserCard
    fields = ["answered", "hidden"]
    template_name = "cardbox/usercard_detail.html"

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
        )
        if formset.is_valid():
            formset.save()

        return super().form_valid(form)

    def get_success_url(self) -> str:
        return reverse("cardbox:usercard_detail", kwargs={"pk": self.object.pk})


class PrayerDeckView(LoginRequiredMixin, DetailView):
    model = PrayerDeck

    def get_object(self, queryset=None):
        if self.kwargs.get('pk'):
            prayerdeck = PrayerDeck.objects.get(id=self.kwargs.get('pk'))
            if prayerdeck.user != self.request.user:
                raise PermissionError
        else:
            prayerdeck = PrayerDeck.objects.filter(user=self.request.user).latest('date')
        return prayerdeck

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
        formset = UserCategoryOptionsFormSet(
            self.request.POST,
            queryset=UserCategoryOptions.objects.filter(user=self.request.user),
        )
        if formset.is_valid():
            formset.save()
        else:
            print("Invalid form")
            print(formset.errors)
            print(formset.non_form_errors())

        return super().form_valid(form)

    def get_success_url(self) -> str:
        return reverse("cardbox:userprofile_update")
