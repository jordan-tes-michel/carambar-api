# Blagues Carambar API

Bienvenue sur le dépôt de l'API blagues Carambar ! Cette API permet d'ajouter et de consulter des blagues de Carambar.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Comment commencer](#comment-commencer)
- [Documentation API](#documentation-api)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctionnalités

- Ajouter une nouvelle blague Carambar.
- Lister toutes les blagues Carambar.
- Rechercher une blague spécifique.
- Consulter une blague aléatoire

## Comment commencer

Assurez-vous d'avoir Node.js et npm installés sur votre machine.

Clonez ce dépôt.

Installez les dépendances:

`cd carambar-api`

`npm install`

Exécutez l'API:

`npm start`

## Documentation API

- POST /blagues/add - Ajoute une nouvelle blague
- GET /blagues - Récupère toutes les blagues
- GET /blagues/:id - Récupère une blague spécifique avec son ID
- GET /blagues/random - Récupère une blague aléatoire

## Licence

[MIT](https://opensource.org/license/mit)