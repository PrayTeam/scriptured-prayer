# Generated by Django 5.0.1 on 2024-01-21 02:01

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="BibleVersion",
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
                ("name", models.CharField(max_length=50)),
                ("abbreviation", models.CharField(max_length=10, unique=True)),
                ("language_code", models.CharField(max_length=2)),
                ("copyright_notice", models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name="Category",
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
                ("name", models.CharField(max_length=50, unique=True)),
                ("name_es", models.CharField(max_length=50, null=True, unique=True)),
                ("name_en", models.CharField(max_length=50, null=True, unique=True)),
                ("genre", models.CharField(choices=[("PR", "Praise")], max_length=2)),
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
                "verbose_name_plural": "categories",
            },
        ),
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
                ("title", models.CharField(max_length=200)),
                ("title_es", models.CharField(max_length=200, null=True)),
                ("title_en", models.CharField(max_length=200, null=True)),
                ("scripture", models.CharField(max_length=50)),
                ("scripture_es", models.CharField(max_length=50, null=True)),
                ("scripture_en", models.CharField(max_length=50, null=True)),
                ("description", models.CharField(max_length=500)),
                ("description_es", models.CharField(max_length=500, null=True)),
                ("description_en", models.CharField(max_length=500, null=True)),
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
                (
                    "version",
                    models.ForeignKey(
                        default=1,
                        on_delete=django.db.models.deletion.SET_DEFAULT,
                        to="prayerapp.bibleversion",
                    ),
                ),
                (
                    "version_en",
                    models.ForeignKey(
                        default=1,
                        null=True,
                        on_delete=django.db.models.deletion.SET_DEFAULT,
                        to="prayerapp.bibleversion",
                    ),
                ),
                (
                    "version_es",
                    models.ForeignKey(
                        default=1,
                        null=True,
                        on_delete=django.db.models.deletion.SET_DEFAULT,
                        to="prayerapp.bibleversion",
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.category",
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
                    models.DateTimeField(blank=True, null=True, verbose_name="last prayed"),
                ),
                ("in_prayer_deck", models.BooleanField(default=False)),
                (
                    "card",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="prayerapp.card"),
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
                    models.DateTimeField(auto_now_add=True, verbose_name="created timestamp"),
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
                    models.DateTimeField(auto_now_add=True, null=True, verbose_name="date prayed"),
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
                    models.DateTimeField(blank=True, null=True, verbose_name="prayer deck last updated"),
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
            name="BibleVerse",
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
                    "book",
                    models.CharField(
                        choices=[
                            ("GEN", "Genesis"),
                            ("EXO", "Exodus"),
                            ("LEV", "Leviticus"),
                            ("NUM", "Numbers"),
                            ("DEU", "Deuteronomy"),
                            ("JOS", "Joshua"),
                            ("JDG", "Judges"),
                            ("RUT", "Ruth"),
                            ("1SA", "1 Samuel"),
                            ("2SA", "2 Samuel"),
                            ("1KI", "1 Kings"),
                            ("2KI", "2 Kings"),
                            ("1CH", "1 Chronicles"),
                            ("2CH", "2 Chronicles"),
                            ("EZR", "Ezra"),
                            ("NEH", "Nehemiah"),
                            ("EST", "Esther"),
                            ("JOB", "Job"),
                            ("PSA", "Psalms"),
                            ("PRO", "Proverbs"),
                            ("ECC", "Ecclesiastes"),
                            ("SNG", "Song of Solomon"),
                            ("ISA", "Isaiah"),
                            ("JER", "Jeremiah"),
                            ("LAM", "Lamentations"),
                            ("EZK", "Ezekiel"),
                            ("DAN", "Daniel"),
                            ("HOS", "Hosea"),
                            ("JOL", "Joel"),
                            ("AMO", "Amos"),
                            ("OBA", "Obadiah"),
                            ("JON", "Jonah"),
                            ("MIC", "Micah"),
                            ("NAM", "Nahum"),
                            ("HAB", "Habakkuk"),
                            ("ZEP", "Zephaniah"),
                            ("HAG", "Haggai"),
                            ("ZEC", "Zechariah"),
                            ("MAL", "Malachi"),
                            ("MAT", "Matthew"),
                            ("MRK", "Mark"),
                            ("LUK", "Luke"),
                            ("JHN", "John"),
                            ("ACT", "Acts"),
                            ("ROM", "Romans"),
                            ("1CO", "1 Corinthians"),
                            ("2CO", "2 Corinthians"),
                            ("GAL", "Galatians"),
                            ("EPH", "Ephesians"),
                            ("PHP", "Philippians"),
                            ("COL", "Colossians"),
                            ("1TH", "1 Thessalonians"),
                            ("2TH", "2 Thessalonians"),
                            ("1TI", "1 Timothy"),
                            ("2TI", "2 Timothy"),
                            ("TIT", "Titus"),
                            ("PHM", "PHILEMON"),
                            ("HEB", "Hebrews"),
                            ("JAS", "James"),
                            ("1PE", "1 Peter"),
                            ("2PE", "2 Peter"),
                            ("1JN", "1 John"),
                            ("2JN", "2 John"),
                            ("3JN", "3 John"),
                            ("JUD", "Jude"),
                            ("REV", "Revelation"),
                        ],
                        max_length=3,
                    ),
                ),
                ("chapter", models.IntegerField()),
                ("verse", models.IntegerField()),
                ("text", models.CharField(max_length=500)),
                (
                    "version",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.bibleversion",
                    ),
                ),
            ],
            options={
                "unique_together": {("version", "book", "chapter", "verse")},
            },
        ),
        migrations.CreateModel(
            name="CardScriptureJson",
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
                ("passage_json", models.JSONField()),
                (
                    "bible_version",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.bibleversion",
                    ),
                ),
                (
                    "card",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="prayerapp.card"),
                ),
            ],
            options={
                "unique_together": {("card", "bible_version")},
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
                ("enabled", models.BooleanField(default=True)),
                ("pray_all_cards", models.BooleanField(default=False)),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="prayerapp.category",
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
                "unique_together": {("user", "category")},
            },
        ),
    ]
