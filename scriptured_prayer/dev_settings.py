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

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",    
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

CORS_ALLOWED_ORIGINS = [
    # current React app dev server
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# DRF Spectacular settings
SPECTACULAR_SETTINGS = {
    "TITLE": "Scriptured Prayer API",
    "DESCRIPTION": "Easy access to the backend for the Scriptured Prayer app.",
    "VERSION": "0.4.0",
    "SERVE_INCLUDE_SCHEMA": False,
    "SERVE_PERMISSIONS": ["rest_framework.permissions.IsAdminUser"],
}

REST_FRAMEWORK["DEFAULT_SCHEMA_CLASS"] = "drf_spectacular.openapi.AutoSchema"

# For debug_toolbar
INTERNAL_IPS = [
    "127.0.0.1",
]

GRAPH_MODELS = {
    "all_applications": True,
    "group_models": True,
}
