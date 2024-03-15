import csv
import requests
from django.core.management.base import BaseCommand, CommandError
from prayerapp.models import Card, Category


class Command(BaseCommand):
    help = "Loads cards from Follin's Google Sheet"

    def handle(self, *args, **options):
        base_url = "https://docs.google.com/spreadsheets/d/"
        spreadsheet_id = "1b6_n8i-cS4M556936OvuR6JovjxtYzni-od3l9QcwsE"

        category_spreadsheet = requests.get(f"{base_url}{spreadsheet_id}/export?format=csv&gid={1231372375}")
        category_data = csv.reader(category_spreadsheet.text.splitlines()[1:], delimiter=",")

        for category in category_data:
            category_name = category[0]
            gid = category[1]
            genre = category[2]
            inspiration = category[3]

            category, cat_created = Category.objects.get_or_create(
                name=category_name,
                defaults={"genre": genre, "inspiration": inspiration},
            )
            if cat_created:
                category.save()
            else:
                category.genre = genre
                category.inspiration = inspiration
                category.save()

            if gid is not None:
                spreadsheet = requests.get(f"{base_url}{spreadsheet_id}/export?format=csv&gid={gid}")
                data = csv.reader(spreadsheet.text.splitlines()[2:], delimiter=",")

                for line in data:
                    card = Card(
                        category=category,
                        title=line[0].strip(),
                        scripture=line[1].strip(),
                        description=line[3].strip(),
                        title_es=line[4].strip(),
                        scripture_es=line[5].strip(),
                        description_es=line[7].strip(),
                    )
                    card.save()
                    self.stdout.write(self.style.SUCCESS('Successfully loaded card "%s"' % line[0]))
