const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
});

const Blague = sequelize.define(
    'Blague',
    {
        devinette: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reponse: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

Blague.sync().then(() => {
    const blaguesInitiales = [
        {
            devinette: 'Quelle est la femelle du hamster ?',
            reponse: 'L\'Amsterdam'
        },
        {
            devinette: 'Que dit un oignon quand il se cogne ?',
            reponse: 'Aïe'
        },
        {
            devinette: 'Quel est l\'animal le plus heureux ?',
            reponse: 'Le hibou, parce que sa femme est chouette'
        },
        {
            devinette: 'Pourquoi le football c\'est rigolo ?',
            reponse: 'Parce que Thierry en rit'
        },
        {
            devinette: 'Quel est le sport le plus fruité ?',
            reponse: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes'
        },
        {
            devinette: 'Que se fait un Schtroumpf quand il tombe ?',
            reponse: 'Un Bleu'
        },
        {
            devinette: 'Quel est le comble pour un marin ?',
            reponse: 'Avoir le nez qui coule'
        },
        {
            devinette: 'Qu\'est ce que les enfants usent le plus à l\'école ?',
            reponse: 'Le professeur'
        },
        {
            devinette: 'Quel est le sport le plus silencieux ?',
            reponse: 'Le para-chuuuut'
        },
        {
            devinette: 'Quel est le comble pour un joueur de bowling ?',
            reponse: 'C’est de perdre la boule'
        }
    ];

    Blague.bulkCreate(blaguesInitiales)
        .then(() => console.log("Les blagues ont été ajoutées avec succès"))
        .catch(err => console.error("Erreur lors de l'ajout des blagues: ", err));
});

module.exports = { Blague };