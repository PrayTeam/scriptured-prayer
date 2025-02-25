from typing import Any

import django_filters
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.utils import timezone
from django.views.generic import TemplateView, UpdateView
from rest_framework import permissions, status, viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response

from .forms import UserCardNoteFormSet, UserCategoryOptionsFormSet, UserProfileForm
from .models import (
    Card,
    Category,
    UserCard,
    UserCardPrayedLog,
    UserCategoryOptions,
    UserProfile
)
from .serializers import (
    CardSerializer,
    CategorySerializer,
    UserCardSerializer,
)


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
        form = UserProfileForm(self.request.POST, request=self.request, instance=self.object)
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
    limit = django_filters.NumberFilter(method="limit_filter")

    class Meta:
        model = UserCard
        fields = {
            "card__category__name": ["exact"],
            "card__category__genre": ["exact"],
            "card__category__id": ["exact"],
            "answered": ["exact"],
            "hidden": ["exact"],
            "in_prayer_deck": ["exact"],
        }

    def limit_filter(self, queryset, name, value):
        """Filter the queryset to return a certain number of usercards divided evenly across the category."""
        categories = queryset.values_list("card__category", flat=True).distinct()
        if len(categories) == 0:
            return queryset.none()
        if len(categories) == 1:
            return queryset.order_by("-last_prayed")[:value]
        count_each_category = value // len(categories)
        remainder = value % len(categories)
        new_queryset = queryset.none()
        for category in categories:
            if remainder > 0:
                new_queryset |= queryset.filter(card__category=category).order_by("-last_prayed")[
                    : count_each_category + 1
                ]
                remainder -= 1
            else:
                new_queryset |= queryset.filter(card__category=category).order_by("-last_prayed")[:count_each_category]
        return new_queryset


class CardFilter(django_filters.FilterSet):
    """Filter the queryset to return a certain number of cards divided evenly across the category."""

    exclude_category__genre = django_filters.CharFilter(field_name="category__genre", lookup_expr="exact", label='Exclude category genre', exclude=True)
    limit = django_filters.NumberFilter(method="limit_filter", label='Limit')
    include_end_utility_cards = django_filters.BooleanFilter(method="include_end_utility_cards_filter", label='Include end utility cards')

    class Meta:
        model = Card
        fields = {
            "category__id": ["exact"],
            "category__genre": ["exact"],
        }

    def limit_filter(self, queryset, name, value):
        categories = queryset.values_list("category", flat=True).distinct()
        if len(categories) == 0:
            return queryset.none()
        if len(categories) == 1:
            return queryset.order_by("last_prayed")[:value]
        count_each_category = value // len(categories)
        remainder = value % len(categories)
        new_queryset = queryset.none()
        for category in categories:
            if remainder > 0:
                new_queryset |= queryset.filter(category=category).order_by("?")[: count_each_category + 1]
                remainder -= 1
            else:
                new_queryset |= queryset.filter(category=category).order_by("?")[:count_each_category]
        return new_queryset
    
    def include_end_utility_cards_filter(self, queryset, name, value):
        if value == True:
            queryset |= Card.objects.filter(category__name="Request Starters").order_by("?")[:1]
            queryset |= Card.objects.filter(category__name="Ending").order_by("?")[:1]
        return queryset


class UserCardViewSet(viewsets.ModelViewSet):
    serializer_class = UserCardSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_class = UserCardFilter
    search_fields = ["card__title", "card__scripture", "card__instruction", "card__category__name"]

    def get_queryset(self):
        return UserCard.objects.filter(user=self.request.user).prefetch_related(
            "card", "card__category", "usercardnote_set"
        )

    @action(detail=True, methods=["put"])
    def log_prayer(self, request, pk=None, **kwargs):
        usercard = self.get_object()
        if usercard.user != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        usercard.last_prayed = timezone.now()
        usercard.save()
        UserCardPrayedLog.objects.create(usercard=usercard)
        return Response(status=status.HTTP_200_OK)


class CardViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_class = CardFilter
    search_fields = ["title", "scripture", "instruction"]

    def get_queryset(self):
        return Card.objects.all().prefetch_related("category")


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Category.objects.all()

