#!/bin/bash

echo "Changing directory to frontend..."
cd projet-fin-annee-back-office/frontend

echo "Installing dependencies..."
yarn install

echo "Starting Docker containers..."
docker-compose up -d

echo "Running composer install..."
docker-compose exec php composer install

echo "Generating application key..."
docker-compose exec php php artisan key:generate

echo "Clearing optimization cache..."
docker-compose exec php php artisan optimize:clear

echo "Initializing brand new database..."
docker-compose exec php php artisan migrate:fresh
