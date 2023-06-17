# 🌟 Projet Fin d'Année Back-Office 🌟

Projet de fin d'année NextJS 13 | TypeScript | Laravel | PostGreSQL

## 📋 Prérequis
- Disposer des variables d'environnement dans un fichier `.env`

## ⚙️ SETUP

Rentrez les commandes suivantes une à une ou utiliser le fichiers init.bat pour windows ou init.sh pour linux/macOs

```
git clone https://github.com/Rijenth/projet-fin-annee-back-office.git
```

```
cd projet-fin-annee-back-office/frontend
```

```
npm install
```

```
docker-compose up -d
```

```
docker-compose exec php composer install
```

```
docker-compose exec php php artisan key:generate
```

```
docker-compose exec php php artisan optimize:clear
```

```
docker-compose exec php php artisan migrate:fresh
```
