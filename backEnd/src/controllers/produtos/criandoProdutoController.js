const criandoProdutoController = async(req, res)=>{
    const db = require('../../connection/db');
    const produto = require('../../models/produto');
    await db.sync()
    const {Nome, Qtd, Valor, Descricao, Img, Vendedor} = req.body;
    const novoProduto = await produto.create({
        Nome,
        Qtd,
        Valor,
        Descricao,
        Img,
        Vendedor
    });
    console.log("NEW PRODUCT", novoProduto);
    return res.status(201).json({produto: novoProduto});
};

module.exports = criandoProdutoController;