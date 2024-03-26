const deletandoFormadeenvioController = async (req, res)=>{
    let formaEnvio = require('../../models/formasDeenvio')
    const id = req.params.idEnvio;
    const formaEnvioDeletado = await formaEnvio.findByPk(id);
    const Envio = await formaEnvio.findByPk(id);
    await formaEnvio.destroy({
        where: {
            id: id
        }
    })
    return res.json({formadeEnvio: 'Forma de envio deletada com sucesso', Envio: Envio});
};

module.exports = deletandoFormadeenvioController;