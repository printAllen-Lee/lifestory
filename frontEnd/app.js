const express = require('express');
const app = express();
const port = 1717;

app.use(express.static(__dirname + '/public/'))
app.set("view engine", "ejs");

// page init
app.get('/', (req, res) => {
   res.render("pages/index")
});

// page buscar
app.get('/buscar', (req, res) => {
   res.render('pages/buscar')
});

// page login
app.get('/login', (req, res) => {
   res.render('pages/login')
});

//page cadastro
app.get('/cadastro', (req,res) =>{
   res.render('pages/cadastro')
})

//page arry de produtos
app.get('/produtos', (req, res) => {
   const produtos = require("./public/model/ultimaVisita");
   console.log(produtos);
   res.send(produtos);
});

// page arry de produtos 2
app.get('/ofertas-dia', (req, res) => {
   const ofertas = require("./public/model/ofertasDia");
   console.log(ofertas)
   res.send(ofertas);
});

// page arry de produtos 3
app.get('/podegostar', (req, res) => {
   const gosto = require("./public/model/podegostaruser");
   console.log(gosto)
   res.send(gosto);
});

app.listen(port, () => {
   console.log(`Servidor Rodando! Porta: ${port}`)
});