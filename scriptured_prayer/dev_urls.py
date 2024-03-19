"""
URL configuration for scriptured_prayer development.
"""

from django.urls import include, path
from .urls import *

urlpatterns += [
    path("__debug__/", include("debug_toolbar.urls")),
    path("", include("prayerapp.dev_urls"))
]
