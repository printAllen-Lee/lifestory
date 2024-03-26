const Sequelize = require('sequelize');
const db = require('../connection/db');

const formaDeenvio = db.define('Envio', {
    idEnvio: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Correio: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Sedex: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Retirada: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = formaDeenvio;