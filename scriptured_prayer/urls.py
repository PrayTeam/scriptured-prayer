"""
URL configuration for scriptured_prayer project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.urls import path, include
from django.utils.translation import gettext_lazy as _

urlpatterns = [
    path("__debug__/", include("debug_toolbar.urls")),
]

urlpatterns += i18n_patterns(
    path(_("cardbox/"), include("cardbox.urls")),
    path(_("admin/"), admin.site.urls),
    path(_("accounts/"), include("django.contrib.auth.urls")),
)
