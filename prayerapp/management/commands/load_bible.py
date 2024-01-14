from zipfile import ZipFile
from io import BytesIO
import re
import requests
from django.core.management.base import BaseCommand, CommandError
from prayerapp.models import BibleVersion, BibleVerse


class Command(BaseCommand):
    help = "Load a version of the bible from ebible.org"

    def add_arguments(self, parser):
        parser.add_argument("language", type=str)
        parser.add_argument("version", type=str)

    def handle(self, *args, **options):
        version = options["version"]
        ebible_language = options["language"]
        language = "en" # default to english
        match options["language"]:
            case "eng": language = "en"
            case "spa": language = "es"

        self.stdout.write(
            self.style.SUCCESS(
                f'Loading bible version "{version}" in language "{language}"'
            )
        )

        zip_url = f"https://ebible.org/Scriptures/{ebible_language}{version}_readaloud.zip"

        r = requests.get(zip_url)
        r.raise_for_status()
        with ZipFile(BytesIO(r.content)) as zip_files:
            for zipinfo in zip_files.infolist():
                zip_match = re.match(r".*([1-3A-Z]{3})_([0-9]*)_read\.txt$", zipinfo.filename)
                if zip_match:

                    bible_version, created = BibleVersion.objects.get_or_create(
                        name=f"{version} {language}",
                        abbreviation=version.upper(),
                        language_code=language,
                        defaults={
                            "name": f"{version} {language}",
                            "abbreviation": version.upper(),
                            "language_code": language,
                            "copyright_notice": "<replace me>",
                        })
                    
                    with zip_files.open(zipinfo) as file:
                        book = zip_match.group(1)
                        chapter = int(zip_match.group(2))
                        text = file.read().decode("utf-8")
                        verse = 0
                        for line in text.splitlines()[2:]:
                            verse += 1
                            if line.strip():
                                BibleVerse.objects.get_or_create(
                                    version=bible_version,
                                    book=book,
                                    chapter=chapter,
                                    verse=verse,
                                    text=line.strip(),
                                )
                    
                    self.stdout.write(
                        self.style.SUCCESS(
                            f'Successfully loaded {book} {chapter}'
                        )
                    )