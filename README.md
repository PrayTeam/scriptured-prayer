# Prayer Box

> Pray intentionally, pray Scripturally, pray consistently.

An application that helps you connect with God.

---

## Getting started

Dependencies:
- python >= 3.12
- pip >= 23.2.1
- poetry >= 1.1.11 (install with `pip install poetry`)
- sqlite3

> On Debian-based systems, you may need to install libsqlite3-dev and either reinstall or recompile Python to avoid `_sqlite3` module errors

I recommend [pyenv](https://github.com/pyenv/pyenv?tab=readme-ov-file#installation) to manage python versions separate from the system.


We are using [Poetry](https://python-poetry.org/) to manage dependencies and the virtual environment.


Run the following to seed the database and run the application server & frontend:

```sh
# install dependencies
poetry install --no-root
poetry run python manage.py migrate
poetry run python manage.py load_cards
poetry run python manage.py createsuperuser
poetry run python manage.py runserver
```

If you want to be able to generate the database ERD, you'll need to install Graphviz:
https://pygraphviz.github.io/documentation/stable/install.html

then run:
```sh
poetry install --no-root --with pygraphviz
poetry run python manage.py graph_models -o erd.png
```