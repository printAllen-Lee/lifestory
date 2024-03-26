const express = require ('express');

const alterandoProdutoController = require('../controllers/produtos/alterandoProdutoController');
const criandoProdutoController = require('../controllers/produtos/criandoProdutoController');
const deletandoProdutoController = require('../controllers/produtos/deletandoProdutoController');
const pegandoProdutoController = require('../controllers/produtos/pegandoProdutoController');

const produtoRoute = express.Router();

produtoRoute.post('/produtos', criandoProdutoController);

produtoRoute.get('/produtos', pegandoProdutoController);

produtoRoute.put('/produtos/:id', alterandoProdutoController);

produtoRoute.delete('/produtos', deletandoProdutoController);

module.exports = produtoRoute;