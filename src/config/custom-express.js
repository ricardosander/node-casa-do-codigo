require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

app.use('/static', express.static('src/app/public'));

// Cria o middleware para fazer o parse das informações da requisição.
app.use(bodyParser.urlencoded({
    extended: true // Habilita receber objetos complexos, no formato JSON. 
}));

app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const sessaoAutenticacao = require('./sessao-autenticacao');
sessaoAutenticacao(app);

const rotas = require('../app/rotas/rotas');
rotas(app);

const templates = require('../app/views/templates');

app.use((request, response, next) => {
    response.status(404).marko(templates.base.erro404);
});

app.use((erro, request, response, next) => {
    response.status(500).marko(templates.base.erro500);
});

module.exports = app;