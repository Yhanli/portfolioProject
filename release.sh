#!/usr/bin/env bash
sudo git stash
sudo git reset --hard origin/master
sudo git pull
sudo npm run build
pipenv run python myPortfolio/manage.py makemigrations
pipenv run python myPortfolio/manage.py migrate
pipenv run python myPortfolio/manage.py collectstatic --noinput

sudo supervisorctl stop gunicornPers
sudo supervisorctl start gunicornPers

