const Sequelize = require("sequelize");
const db = require("../connection/db");

const contato = db.define("contato",{
    contato_id:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false
    },
    contato_telefone:{
        type:Sequelize.DataTypes.CHAR(12),
        allowNull:false
    },
    contato_email:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },

    contato_telefone2:{
        type: Sequelize.DataTypes.CHAR(12)
    }
})

module.exports = contato;