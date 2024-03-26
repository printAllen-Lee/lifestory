const express = require('express');
const {usuarioRotas} = require('./routes/usuario.routes');
const {produtoRoute} = require('./routes/produtos.routes');
const app = express();
const port = 1616;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRotas);
app.use(produtoRoute);

app.listen(port, ()=>{
    console.log('Servidor rodando🚀');
})