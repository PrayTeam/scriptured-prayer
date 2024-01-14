from django.urls import path, include, re_path
from django.utils.translation import gettext_lazy as _
from rest_framework import routers

from . import views
router = routers.DefaultRouter()
router.register(r'usercards', views.UserCardViewSet, basename="usercards")

app_name = "prayerapp"
urlpatterns = [
    path('api/', include(router.urls)),
    path(_("cards/"), views.UserCardListView.as_view(), name="usercard_list"),
    path(_("prayerdeck/"), views.PrayerDeckView.as_view(), name="prayer"),
    path(
        _("profile/"), views.UserProfileUpdateView.as_view(), name="userprofile_update"
    ),
    path("card/<int:pk>/", views.UserCardDetailView.as_view(), name="usercard_detail"),
    # to make react router play nice
    re_path(r".*", views.IndexView.as_view(), name="prayerapp"),
]

urlpatterns += router.urls