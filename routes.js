const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur !');
});

router.post('/blagues/add', (req, res) => {
    // TODO: Ajout d'une blague
    res.send('Blague ajoutée');
});

router.get('/blagues', (req, res) => {
    // TODO: Lister toutes les blagues
    res.send('Voici la liste de toutes les blagues');
});

router.get('/blagues/random', (req, res) => {
    // TODO: Récupérer une blague aléatoire
    res.send('Voici une blague aléatoire');
});

router.get('/blagues/:id', (req, res) => {
    // TODO: Récupérer une blague spécifique
    const id = req.params.id;
    res.send(`Voici la blague demandée : ${id}`);
});

module.exports = router;