# projet-fin-annee-back-office
Environnement de développement pour le projet de fin d'année

## Prérequis
- Composer
- Docker
- Docker-compose
- PHP 8.1

### Installer composer sur linux
``` sudo apt-get install composer ```

### Installer docker sur linux
``` sudo apt-get install docker ```

### Demarrer le daemon docker sur linux
``` sudo dockerd ```

### Installer docker-compose sur linux
``` sudo apt-get install docker-compose ```

## Setup
```git clone https://github.com/Rijenth/projet-fin-annee-back-office.git```

```cd projet-fin-annee-back-office/backend```

### Uniquement si vous n'avez pas les extensions php nécessaires
```sudo apt-get install php-dom php-xml php-curl```

```composer install```

### Uniquement si problème de permissions
```sudo chmod 777 -R projet-fin-annee-back-office/```

```docker-compose up -d```

```docker-compose exec php composer install```

```docker-compose exec php php artisan key:generate```

```docker-compose exec php php artisan optimize:clear```

```docker-compose exec php php artisan migrate:fresh```

## Verifier que tout fonctionne
Sur votre navigateur, ```localhost:8000/api/``` doit retourner :

```json
{
    "data": [
        {
            "id": "1",
            "type": "Api Resource",
            "attributes": {
                "name": "Laravel",
                "version": "10.0",
                "message": "Hello World!"
            }
        }
    ]
}
```	

## Commandes

Donne des informations sur ce qui ne respecte pas les bonnes pratiques de code
```docker-compose exec php composer test```

Fix les erreurs de style automatiquement
```docker-compose exec php composer lint```

Reinitialiser la base donnée
```docker-compose exec php php artisan migrate:fresh```

## Accès au Telescope : 
```localhost:8000/telescope```
