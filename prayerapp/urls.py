from django.urls import path, include
from rest_framework import routers

from . import views
router = routers.DefaultRouter()
router.register(r'usercards', views.UserCardViewSet, basename="usercards")

app_name = "prayerapp"
urlpatterns = [
    path("", views.IndexView.as_view(), name="prayerapp"),
    path('api/', include(router.urls)),
]

urlpatterns += router.urls