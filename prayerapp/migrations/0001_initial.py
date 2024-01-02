# Generated by Django 4.2.8 on 2024-01-02 02:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Card",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("NG", "Names of God"),
                            ("GI", "God Is ..."),
                            ("NJ", "Names of Jesus"),
                            ("NS", "Names of the Holy Spirit"),
                            ("IC", "In Christ"),
                            ("PG", "Promises of God"),
                            ("SR", "Stones of Remembrance"),
                            ("BP", "Breath Prayers"),
                            ("PR", "Prayers of the Bible"),
                        ],
                        max_length=2,
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("title_es", models.CharField(max_length=200, null=True)),
                ("title_en", models.CharField(max_length=200, null=True)),
                ("scripture", models.CharField(max_length=50)),
                ("scripture_es", models.CharField(max_length=50, null=True)),
                ("scripture_en", models.CharField(max_length=50, null=True)),
                ("text", models.CharField(max_length=500)),
                ("text_es", models.CharField(max_length=500, null=True)),
                ("text_en", models.CharField(max_length=500, null=True)),
                ("private", models.BooleanField(default=False)),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_modified_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="UserCard",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                ("answered", models.BooleanField(default=False)),
                ("hidden", models.BooleanField(default=False)),
                (
                    "last_prayed",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last prayed"
                    ),
                ),
                ("in_prayer_deck", models.BooleanField(default=False)),
                (
                    "card",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="prayerapp.card"
                    ),
                ),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_modified_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "unique_together": {("user", "card")},
            },
        ),
        migrations.CreateModel(
            name="UserProfile",
            fields=[
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                ("cards_per_day", models.IntegerField(default=10)),
                (
                    "prayer_deck_last_updated",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="prayer deck last updated"
                    ),
                ),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_modified_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="UserCardPrayedLog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "date_prayed",
                    models.DateTimeField(
                        auto_now_add=True, null=True, verbose_name="date prayed"
                    ),
                ),
                (
                    "usercard",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.usercard",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="UserCardNote",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                ("note", models.CharField(max_length=200)),
                (
                    "date",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="created timestamp"
                    ),
                ),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_modified_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "usercard",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.usercard",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="UserCategoryOptions",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("NG", "Names of God"),
                            ("GI", "God Is ..."),
                            ("NJ", "Names of Jesus"),
                            ("NS", "Names of the Holy Spirit"),
                            ("IC", "In Christ"),
                            ("PG", "Promises of God"),
                            ("SR", "Stones of Remembrance"),
                            ("BP", "Breath Prayers"),
                            ("PR", "Prayers of the Bible"),
                        ],
                        max_length=2,
                    ),
                ),
                ("enabled", models.BooleanField(default=True)),
                ("pray_all_cards", models.BooleanField(default=False)),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_created_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="%(app_label)s_%(class)s_modified_by",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "unique_together": {("user", "category")},
            },
        ),
    ]
