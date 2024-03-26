const alterandoProdutoController = async (req, res)=>{
    let produto = require('../../models/produto');
    const id = req.params.idProduto;
    const {Nome, Qtd, Valor, Descricao, Img, Vendedor} = req.body;
    const produtos = await produto.findByPk(id);
    await usuario.update({
        Nome: Nome || produtos.Nome,
        Qtd: Qtd || produtos.Qtd,
        Valor: Valor || produtos.Valor,
        Descricao: Descricao || produtos.Descricao,
        Img: Img || produtos.Img,
        Vendedor: Vendedor || produtos.Vendedor
    }, {where: {id: id}});
    const produtoAtualizado = await produto.findByPk(id);
    return res.json({produto: produtoAtualizado});
};

module.exports = alterandoProdutoController;