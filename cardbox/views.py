from typing import Any
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.utils import timezone
from django.shortcuts import render
from django.views.generic import ListView, DetailView, UpdateView, FormView, TemplateView
from .models import UserCard, UserProfile, Prayer, UserCategorySchedule, PrayerUserCard
from .forms import UserProfileForm, UserCategoryScheduleFormSet, UserCardNoteFormSet, PrayerForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse


class CardBoxView(LoginRequiredMixin, ListView):
    model = UserCard
    template_name = "cardbox/index.html"

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


class PrayerView(LoginRequiredMixin, UpdateView):
    model = PrayerUserCard
    form_class = PrayerForm

    def get_object(self, queryset=None):
        prayer, created = Prayer.objects.get_or_create(user=self.request.user, date=timezone.now().date())
        if self.kwargs.get('seq'):
            prayerusercard = prayer.prayerusercard_set.all()[self.kwargs.get('seq')]
        else:
            prayerusercard = prayer.prayerusercard_set.all()[0]
        return prayerusercard

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["usercardnotes_formset"] = UserCardNoteFormSet(instance=self.object.usercard)
        return context
    
    def form_valid(self, form: BaseModelForm) -> HttpResponse:
        if self.request.POST.get('note_save'):
            formset = UserCardNoteFormSet(
                self.request.POST,
                instance=self.object.usercard,
            )
            if formset.is_valid():
                formset.save()

        if self.request.POST.get("prayer_nav") == "next":
            self.object.used = True
            self.object.save()
            if self.kwargs.get('seq') == self.request.user.userprofile.cards_per_day - 1 and self.request.POST.get('prayer_nav') == 'next':
                self.object.prayer.completed = True
                self.object.prayer.save()
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        if self.kwargs.get('seq') == self.request.user.userprofile.cards_per_day - 1 and self.request.POST.get('prayer_nav') == 'next':
            return reverse("cardbox:cardbox") # We should make a celebration page
        elif self.request.POST.get('prayer_nav') == 'prev' and (self.kwargs.get('seq') or 0) > 0:
            return reverse("cardbox:prayer", kwargs={"seq": self.kwargs.get('seq')-1})
        elif self.request.POST.get('prayer_nav') == 'next':
            print("next")
            return reverse("cardbox:prayer", kwargs={"seq": (self.kwargs.get('seq') or 0)+1})
        elif self.request.POST.get('note_save'):
            return reverse("cardbox:prayer", kwargs={"seq": self.kwargs.get('seq')})
        else:
            print(self.request.POST.get('prayer_nav'))
            return reverse("cardbox:prayer", kwargs={"seq": 0})

class UserProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = UserProfile
    form_class = UserProfileForm

    def get_object(self, queryset=None):
        userprofile, created = UserProfile.objects.get_or_create(user=self.request.user)
        return userprofile

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categoryformset"] = UserCategoryScheduleFormSet(
            queryset=UserCategorySchedule.objects.filter(user=self.request.user)
        )
        return context

    def form_valid(self, form):
        formset = UserCategoryScheduleFormSet(
            self.request.POST,
            queryset=UserCategorySchedule.objects.filter(user=self.request.user),
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

class ReactDemoView(TemplateView) :
    template_name = "cardbox/demo.html"

    def index(request):
        return render(request, 'demo.html', {})
