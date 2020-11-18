require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Cria o middleware para fazer o parse das informações da requisição.
app.use(bodyParser.urlencoded({
    extended: true // Habilita receber objetos complexos, no formato JSON. 
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;