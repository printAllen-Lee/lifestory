const deletandoUsuarioController = async (req, res) => {
    let usuario = require('../../models/usuario')
    const id = req.params.idUsuario;
    const usuarioDeletado = await usuario.findByPk(id);
    const pessoa = await usuario.findByPk(id);
    await usuario.destroy({
        where: {
            id: id
        }
    })
    return res.json({usuario: 'usuarioDeletado', pessoa: pessoa});
};

module.exports = deletandoUsuarioController