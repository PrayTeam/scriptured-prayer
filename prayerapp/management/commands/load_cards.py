import csv
import requests
from django.core.management.base import BaseCommand, CommandError
from prayerapp.models import Card, Category


class Command(BaseCommand):
    help = "Loads cards from Follin's Google Sheet"

    def handle(self, *args, **options):
        base_url = "https://docs.google.com/spreadsheets/d/"
        spreadsheet_id = "1b6_n8i-cS4M556936OvuR6JovjxtYzni-od3l9QcwsE"

        categories = [
            ("Names of God", 0, "PR"),
            ("God Is ...", 1817719411, "PR"),
            ("Names of Jesus", 48885571, "PR"),
            ("Names of the Holy Spirit", 1671114364, "PR"),
            ("In Christ", 956380343, "TH"),
            ("Promises of God", 1043713344,"TH"),
        ]

        for category_name, gid, genre in categories:
            category, cat_created = Category.objects.get_or_create(name=category_name, genre=genre)
            if cat_created:
                category.save()

            if gid is not None:
                spreadsheet = requests.get(
                    f"{base_url}{spreadsheet_id}/export?format=csv&gid={gid}"
                )
                data = csv.reader(spreadsheet.text.splitlines()[2:], delimiter=",")

                for line in data:
                    card = Card(
                        category=category,
                        title=line[0].strip(),
                        scripture=line[1].strip(),
                        title_es=line[2].strip(),
                        scripture_es=line[3].strip(),
                    )
                    card.save()
                    self.stdout.write(
                        self.style.SUCCESS('Successfully loaded card "%s"' % line[0])
                    )