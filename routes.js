const express = require('express');
const {Blague} = require('./database.js');
const {Sequelize} = require("sequelize");
const router = express.Router();
router.use(express.json());

router.post('/blagues/add', (req, res) => {
    const devinette = req.body.devinette;
    const reponse = req.body.reponse;

    if (devinette && reponse) {
        Blague.create({
            devinette: devinette,
            reponse: reponse
        })
            .then(blague => res.send(blague.toJSON()))
            .catch(err => res.send('Une erreur est survenue lors de l\'ajout de la blague: ' + err));
    } else {
        res.send('Impossible d\'ajouter la blague: un ou plusieurs attributs sont vides');
    }
});

router.get('/blagues', (req, res) => {
    Blague.findAll().then(blagues => {
            res.json(blagues)
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: 'Une erreur est survenue lors de la récupération des blagues'});
        });
});

router.get('/blagues/random', (req, res) => {
    Blague.findAll({
        order: Sequelize.literal('random()'),
        limit: 1
    }).then(blagues => {
        const blague = blagues[0];
        res.json(blague);
    }).catch(err => console.error(err));
});

router.get('/blagues/:id', (req, res) => {
    const id = req.params.id;
    Blague.findAll({
        where: {
            id: id
        }
    }).then(blagues => {
        const blague = blagues[0];
        if (blague) {
            res.json(blague);
        }
        res.send('Aucune blague ne correspond à l\'id ' + id);
    }).catch(err => console.error(err));
});

module.exports = router;