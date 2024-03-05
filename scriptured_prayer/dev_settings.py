from .settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-823e65i1f(y#@jghqoy5f0ee*7q8$ghe7_7eww$i5ha9obfa@b"

DEBUG = True

INSTALLED_APPS += [
    "debug_toolbar",
    "django_extensions",
    "drf_spectacular",
]

MIDDLEWARE += [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

# Add development-only URL patterns
ROOT_URLCONF = 'scriptured_prayer.dev_urls'

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}