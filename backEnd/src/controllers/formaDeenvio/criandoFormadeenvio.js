const criandoFormadeenvioController = async(req, res)=>{
    const db = require('../../connection/db')
    const formaEnvio = require('../../models/formasDeenvio');
    await db.sync();
    const {Correio, Sedex, Retirada} = req.body;
    const novoEnvio = await formaEnvio.create({
        Correio, Sedex, Retirada
    });
    console.log('Nova forma de envio cadastrada com sucesso!', novoEnvio);
    return res.status(201).json({envio: novoEnvio});
};

module.exports = criandoFormadeenvioController;