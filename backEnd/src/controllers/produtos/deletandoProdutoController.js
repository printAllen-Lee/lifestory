const deletandoProdutoController = async (req, res) => {
    let produto = require("../../models/produto");
    const id = req.params.id;
    const produtoDeletado = await produto.findByPk(id);
    const produtos = await produto.findByPk(id);
    await produto.destroy({
        where:{
            id: id
        }
    })

    return res.json({produto: 'Produto deletado com sucesso!', produto: produtos});
}

module.exports = deletandoProdutoController;