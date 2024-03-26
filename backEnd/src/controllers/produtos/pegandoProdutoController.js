const pegandoProdutoController = async (req, res)=>{
    let produto = require("../../models/produto");
    const produtos = await produto.findAll();
    return res.status(200).json({produtos: produtos})
};

module.exports = pegandoProdutoController;