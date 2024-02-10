from django.urls import path, include, re_path
from rest_framework import routers
from . import views
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'usercards', views.UserCardViewSet, basename="usercards")
router.register(r'cards', views.CardViewSet, basename="cards")

app_name = "prayerapp"
urlpatterns = [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='prayerapp:schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='prayerapp:schema'), name='redoc'),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/', include(router.urls)),
    # to make react router play nice
    re_path(r".*", views.IndexView.as_view()),
]
