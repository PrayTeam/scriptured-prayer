from django.apps import AppConfig


class PrayerappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "prayerapp"

    def ready(self) -> None:
        import prayerapp.schema

        return super().ready()
