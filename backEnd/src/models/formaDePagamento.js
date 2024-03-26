const Sequelize = require("sequelize");
const db = require("../connection/db");

const formaDePagamento = db.define("formaDePagamento",{
    id_formaDePagamento:{
       type: Sequelize.DataTypes.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKEY:true
    },

    pagamento_cartao: {
        type: Sequelize.DataTypes.CHAR(1)

    },

    pagamento_boleto: {
        type:
        Sequelize.DataTypes.CHAR(1)
    },

    pagamento_pix:{
        type: Sequelize.DataTypes.CHAR(1)
    },

    pagamento_paypal:{
        type: Sequelize.DataTypes.CHAR(1)
    }

   
})
module.exports = formaDePagamento;