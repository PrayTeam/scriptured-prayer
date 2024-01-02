from django.urls import path
from django.utils.translation import gettext_lazy as _

from . import views

app_name = "prayerapp"
urlpatterns = [
    path("", views.IndexView.as_view(), name="prayerapp"),
    path(_("cards/"), views.UserCardListView.as_view(), name="usercard_list"),
    path(_("prayerdeck/"), views.PrayerDeckView.as_view(), name="prayer"),
    path(
        _("profile/"), views.UserProfileUpdateView.as_view(), name="userprofile_update"
    ),
    path("card/<int:pk>/", views.UserCardDetailView.as_view(), name="usercard_detail"),
]
