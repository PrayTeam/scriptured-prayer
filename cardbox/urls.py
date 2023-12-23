from django.urls import path
from django.utils.translation import gettext_lazy as _

from . import views

app_name = "cardbox"
urlpatterns = [
    path("react/", views.ReactView.as_view(), name="react"),

    path("", views.CardBoxView.as_view(), name="cardbox"),
    path(_("prayer/"), views.PrayerView.as_view(), name="prayer"),
    path(_("prayer/<int:seq>/"), views.PrayerView.as_view(), name="prayer"),
    path(
        _("profile/"), views.UserProfileUpdateView.as_view(), name="userprofile_update"
    ),
    path("<int:pk>/", views.UserCardDetailView.as_view(), name="usercard_detail"),
]
