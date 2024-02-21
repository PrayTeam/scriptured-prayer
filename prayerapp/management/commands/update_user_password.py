from typing import Any
from django.core.management import BaseCommand, CommandError
from simple_term_menu import TerminalMenu
from prayerapp.models import UserProfile
from getpass import getpass

class Command(BaseCommand):
    help = "Update a user's password in the database from a terminal menu."

    def handle(self, *args: Any, **options: Any) -> str | None:
        all_profiles = UserProfile.objects.all()
        
        if all_profiles.count() == 0:
            raise CommandError("There are no profiles in the db yet. Create a user first.")

        users = [profile.user for profile in all_profiles]
        usernames = [user.username for user in users]

        print("Select a user:")
        terminal_menu = TerminalMenu(usernames)

        menu_selection_index = terminal_menu.show()

        selected_user = users[menu_selection_index]

        new_password = "BLANK"
        new_password_confirm = "ALSO_BLANK"
        while new_password != new_password_confirm:
            new_password = getpass(f"Enter the new password for this {selected_user.username}: ")
            new_password_confirm = getpass("Confirm new password: ")
            if new_password != new_password_confirm:
                print("Those passwords do not match.")


        selected_user.set_password(new_password)
        selected_user.save()

        print(f"The password for {selected_user.username} has been updated.")