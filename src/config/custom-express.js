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

const rotas = require('../app/rotas/rotas');
rotas(app);

app.use((request, response, next) => {
    response.status(404).marko(
        require('../app/views/base/erros/404.marko')
    );
});

// app.use((erro, request, response, next) => {
//     response.status(500).marko(
//         require('../app/views/base/erros/500.marko')
//     );
// });

module.exports = app;