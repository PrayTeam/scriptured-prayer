# Prayer Box

> Pray intentionally, pray Scripturally, pray consistently.

An application that helps you connect with God.

---

## Getting started

Dependencies:
- python >= 3.12
- pip >= 23.2.1
- sqlite3

> On Debian-based systems, you may need to install libsqlite3-dev and either reinstall or recompile Python to avoid `_sqlite3` module errors

Run the following to seed the database and run the application server & frontend:

```sh
# install dependencies
pip install poetry
pip install .
poetry run python manage.py migrate
poetry run python manage.py load_cards
poetry run python manage.py createsuperuser
poetry run python manage.py runserver
```
