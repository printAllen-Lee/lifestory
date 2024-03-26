const alterandoFormadeenvio = async (req, res)=>{
    let formaDeEnvio = require('../../models/formasDeenvio');
    const id = req.params.idEnvio;
    const {Correio, Sedex, Retirada} = req.body;
    const Envio = await formaDeEnvio.findByPk(id);
    await Envio.update({
        Correio: Correio || Envio.Correio,
        Sedex: Sedex || Envio.Sedex,
        Retirada: Retirada || Envio.Retirada
    }, {where: {id: id}});
    const envioAtualizado = await Envio.findByPk(id);
    return res.json({envio: envioAtualizado});
};

module.exports = alterandoFormadeenvio;