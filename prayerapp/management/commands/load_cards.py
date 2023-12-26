import csv
import requests
from django.core.management.base import BaseCommand, CommandError
from prayerapp.models import Card


class Command(BaseCommand):
    help = "Loads cards from Follin's Google Sheet"

    def handle(self, *args, **options):
        base_url = "https://docs.google.com/spreadsheets/d/"
        spreadsheet_id = "1b6_n8i-cS4M556936OvuR6JovjxtYzni-od3l9QcwsE"

        gids = {
            "NG": 0,
            "GI": 1817719411,
            "NJ": 48885571,
            "NS": 1671114364,
            "IC": 956380343,
            "PG": None,
            "SR": None,  # 175730326,
            "BP": None,
            "PR": None,
        }

        for category, gid in gids.items():
            if gid is not None:
                spreadsheet = requests.get(
                    f"{base_url}{spreadsheet_id}/export?format=csv&gid={gid}"
                )
                data = csv.reader(spreadsheet.text.splitlines(), delimiter=",")

                for line in data:
                    card = Card(
                        category=category,
                        title=line[0].strip(),
                        scripture=line[1].strip(),
                    )
                    card.save()
                    self.stdout.write(
                        self.style.SUCCESS('Successfully loaded card "%s"' % line[0])
                    )
