const criandoUsuarioController = async(req, res)=>{
        const db = require('../../connection/db')
        const usuario = require('../../models/usuario');
        await db.sync();
        const {primeiroNome, CPF, Senha} = req.body
        const novoUsuario = await usuario.create({
            primeiroNome, CPF, Senha
        });
        console.log('NOVO USUARIO CADASTRADO!', novoUsuario);
        return res.status(201).json({usuario: novoUsuario});
};

module.exports = criandoUsuarioController;