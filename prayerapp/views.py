from typing import Any

from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import TemplateView, UpdateView
from django.utils import timezone
from .forms import UserCardNoteFormSet, UserCategoryOptionsFormSet, UserProfileForm
from .models import Card, UserCard, UserCategoryOptions, UserProfile, UserCardPrayedLog
from .serializers import CardSerializer, UserCardSerializer
from rest_framework import viewsets, permissions, throttling, status
from rest_framework.response import Response
from rest_framework.decorators import action
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
    limit = django_filters.NumberFilter(method='limit_filter')

    class Meta:
        model = UserCard
        fields = {
            'card__category__name': ['exact'],
            'card__category__genre': ['exact'],
            'answered': ['exact'],
            'hidden': ['exact'],
            'in_prayer_deck': ['exact'],
        }
        
    def limit_filter(self, queryset, name, value):
        """Filter the queryset to return a certain number of usercards divided evenly across the category."""
        categories = queryset.values_list('card__category', flat=True).distinct()
        if len(categories) == 1:
            return queryset.order_by("-last_prayed")[:value]
        count_each_category = value//len(categories)
        remainder = value % len(categories)
        new_queryset = queryset.none()
        for category in categories:
            if remainder > 0:
                new_queryset |= queryset.filter(card__category=category).order_by("-last_prayed")[:count_each_category+1]
                remainder -= 1
            else:
                new_queryset |= queryset.filter(card__category=category).order_by("-last_prayed")[:count_each_category]
        return new_queryset

class CardFilter(django_filters.FilterSet):
    """Filter the queryset to return a certain number of cards divided evenly across the category."""
    limit = django_filters.NumberFilter(method='limit_filter')
    class Meta:
        model = Card
        fields = {
            'category__name': ['exact'],
            'category__genre': ['exact'],
        }

    def limit_filter(self, queryset, name, value):
        categories = queryset.values_list('category', flat=True).distinct().order_by("?")
        if len(categories) == 1:
            return queryset.order_by("last_prayed")[:value]
        count_each_category = value//len(categories)
        remainder = value % len(categories)
        new_queryset = queryset.none()
        for category in categories:
            if remainder > 0:
                new_queryset |= queryset.filter(category=category).order_by("?")[:count_each_category+1]
                remainder -= 1
            else:
                new_queryset |= queryset.filter(category=category).order_by("?")[:count_each_category]
        return new_queryset


class UserCardViewSet(viewsets.ModelViewSet):
    serializer_class = UserCardSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    throttle_classes = [throttling.UserRateThrottle]
    filterset_class = UserCardFilter

    def get_queryset(self):
        return UserCard.objects.filter(user=self.request.user).prefetch_related("card", "card__category",  "usercardnote_set")
    
    @action(detail=True, methods=['post'])
    def log_prayer(self, request, pk=None, **kwargs):
        print("hello from usercardviewset")
        usercard = self.get_object()
        if usercard.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        usercard.last_prayed = timezone.now()
        usercard.save()
        UserCardPrayedLog.objects.create(usercard=usercard)
        return Response(status=status.HTTP_201_CREATED)

class CardViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    throttle_classes = [throttling.AnonRateThrottle, throttling.UserRateThrottle]
    filterset_class = CardFilter

    def get_queryset(self):
        return Card.objects.all().prefetch_related("category")