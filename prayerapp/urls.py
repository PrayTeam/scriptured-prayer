from django.urls import path
from django.utils.translation import gettext_lazy as _

from . import views

app_name = "prayerapp"
urlpatterns = [
    path("", views.CardsView.as_view(), name="cards"),
    path(_("prayer/"), views.PrayerView.as_view(), name="prayer"),
    path(_("prayer/<int:seq>/"), views.PrayerView.as_view(), name="prayer"),
    path(
        _("profile/"), views.UserProfileUpdateView.as_view(), name="userprofile_update"
    ),
    path("<int:pk>/", views.UserCardDetailView.as_view(), name="usercard_detail"),
]
