from django.urls import path, include, re_path
from django.utils.translation import gettext_lazy as _
from rest_framework import routers

from . import views
router = routers.DefaultRouter()
router.register(r'usercards', views.UserCardViewSet, basename="usercards")

app_name = "prayerapp"
urlpatterns = [
    path('api/', include(router.urls)),
    # to make react router play nice
    path(r"", views.IndexView.as_view(), name="prayerapp"),
    re_path(r"app/.*", views.IndexView.as_view()),
]

urlpatterns += router.urls