# Scriptured Prayer

> Pray intentionally, pray Scripturally, pray consistently.

An application that helps you connect with God.

---

Here are a few terms that we should be sure to use correctly in our issues to avoid confusion. They don't have to be shown to the end user. At least 'User Card' is a user unfriendly term.

### Card

A single prayer that has a category, title, description, version (of the bible), and scripture reference.

### User Card

A Card that has been associated with a User and includes notes, whether it has been answered, whether the user has hidden the card and some statistical measures of usage.

### Prayer Deck (generated from Cards or UserCards)

The current collection of User Cards a user will be/is/has finished praying through. There is only one per user. The Cards will be swapped out for new ones when the user starts a new prayer. This uses Cards for an anonymous user.

### Daily Deck

A specific Prayer Deck that is generated programmatically with user options (like frequency, whether it has been answered or hidden...).

### Category Deck

A collection of all User Cards for a particular user with a particular category. This would be Cards for an anonymous user.

## Usage Notes

### Card

The scripture reference on a Card needs to be in a fairly strict format. It can be a single verse, a range of verses, or a list of verses and/or ranges. The format is as follows:

- A single verse is just the book name, chapter number, and verse number. For example: `John 3:16`
- A range of verses is the same as a single verse, but with a dash between the first and last verse. For example: `John 3:16-18` or even `John 3:16-4:18`
- A list of verses and/or ranges is a simicolon separated list of the above. For example: `John 3:16-18; JON 4:18; 1Jn 1:1-2:2`
- The book can be abbreviated to the first three letters of the book name. For example: `Joh 3:16-18; JON 4:18; 1Jn 1:1-2:2`
- The book can be in any combination of caps and lowercase. For example: `jOh 3:16-18; JoN 4:18; 1jN 1:1-2:2`
- The book can be the beginning of the name of the book. Ambiguity goes to the first book in the bible that starts with the letters. Just use enough letters to make it unambiguous. For example: `j 3:16-18; j 4:18; 1j 1:1-2:2` would be the same as `Joshua 3:16-18; Joshua 4:18; 1John 1:1-2:2`
- Spaces are fine in the book name. For example: `1John 1:1-2:2` is the same as `1 John 1:1-2:2`

## Dev Getting started

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
poetry run python manage.py load_bible eng net
poetry run python manage.py load_bible spa RV1909
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

## Dev Change User Password

Run the following command in the root directory of the project to run the script to change passwords for a user.
This will allow non django developers to easily change their password if they forget it.

```sh
poetry run python manage.py update_user_password
```
