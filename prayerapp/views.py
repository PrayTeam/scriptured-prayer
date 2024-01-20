from typing import Any

from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import ListView, TemplateView, UpdateView

from .forms import UserCardNoteFormSet, UserCategoryOptionsFormSet, UserProfileForm
from .models import UserCard, UserCategoryOptions, UserProfile
from .serializers import UserCardSerializer
from rest_framework import viewsets, permissions
import django_filters

class IndexView(TemplateView):
    template_name = "prayerapp/index.html"

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

class UserCardFilter(django_filters.FilterSet):
    class Meta:
        model = UserCard
        fields = {
            'card__category__name': ['exact'],
            'answered': ['exact'],
            'hidden': ['exact'],
            'in_prayer_deck': ['exact'],
        }

class UserCardViewSet(viewsets.ModelViewSet):
    serializer_class = UserCardSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_class = UserCardFilter

    def get_queryset(self):
        return UserCard.objects.prefetch_related("card", "card__category", "usercardnote_set").filter(user=self.request.user)