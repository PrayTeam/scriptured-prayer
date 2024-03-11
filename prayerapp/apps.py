from django.apps import AppConfig
from django.conf import settings

class PrayerappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "prayerapp"

    def ready(self) -> None:
        if "drf_spectacular" in settings.INSTALLED_APPS:
            import prayerapp.schema

        return super().ready()
