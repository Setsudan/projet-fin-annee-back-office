# projet-fin-annee-back-office
Projet fin d'année NextJS 13 | TypeScript | Laravel | PostGreSQL

## Prérequis
- Composer
- Docker
- Docker-compose
- PHP 8.1

## SETUP
```git clone https://github.com/Rijenth/projet-fin-annee-back-office.git```

```docker-compose up -d```

```docker-compose exec php composer install```

```docker-compose exec php php artisan key:generate```

```docker-compose exec php php artisan optimize:clear```