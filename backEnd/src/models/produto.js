const Sequelize = require('sequelize');
const db = require('../connection/db');

const produto = db.define('produto', {
    idProduto: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Qtd: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Valor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Descricao: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Img: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Vendedor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = produto;