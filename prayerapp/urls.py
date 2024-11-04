from django.urls import path, include, re_path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"usercards", views.UserCardViewSet, basename="usercards")
router.register(r"cards", views.CardViewSet, basename="cards")
router.register(r"categories", views.CategoryViewSet, basename="categories")
router.register(r"dailydecks", views.DailyDeckViewSet, basename="dailydecks")

app_name = "prayerapp"
urlpatterns = [
    path("api/auth/", include("dj_rest_auth.urls")),
    path("api/", include(router.urls)),
    # to make react router play nice
    re_path(r".*", views.IndexView.as_view()),
]
