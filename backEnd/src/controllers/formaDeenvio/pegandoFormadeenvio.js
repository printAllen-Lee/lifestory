const pegandoFormadeenvioController = async (req, res)=>{
    let formaEnvio = require('../../models/formasDeenvio');
    const Envio = await formaEnvio.findAll();
    return res.status(200).json({Envio: Envio})
};

module.exports = pegandoFormadeenvioController;