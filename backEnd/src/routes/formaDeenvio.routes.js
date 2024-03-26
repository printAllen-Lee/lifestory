const express = require ('express');

const alterandoFormadeenvioController = require('../controllers/formaDeenvio/alterandoFormadeenvio');
const criandoFormadeenvioController = require('../controllers/formaDeenvio/criandoFormadeenvio');
const deletandoFormadeenvioController = require('../controllers/formaDeenvio/deletandoFormadeenvio');
const pegandoFormadeenvioController = require('../controllers/formaDeenvio/pegandoFormadeenvio');

const formasDeEnvioRoute = express.Router();

formasDeEnvioRoute.post("/formas-de-envio", criandoFormadeenvioController);

formasDeEnvioRoute.get('/formas-de-envio', pegandoFormadeenvioController);

formasDeEnvioRoute.put('/formas-de-envio/:id', alterandoFormadeenvioController)

formasDeEnvioRoute.delete('/formas-de-envio', deletandoFormadeenvioController);

module.exports = formasDeEnvioRoute;