const baseRotas = require('./rotas-base');
const livrosRotas = require('./rotas-livros');

module.exports = (app) => {
    baseRotas(app);
    livrosRotas(app);
}