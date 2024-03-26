const Sequelize = require('sequelize');
const db = require('../connection/db');

const Usuario = db.define('usuario', {
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    primeiroNome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    CPF: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Usuario;
