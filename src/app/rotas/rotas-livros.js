const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const Livro = require('../models/livro');

const BaseController = require('../controllers/BaseController');

module.exports = (app) => {

    rotasLivro = LivroController.rotas();

    app.use(rotasLivro.autenticadas, (request, response, next) => {
        if (request.isAuthenticated()) {
            next();
        } else {
            response.redirect(BaseController.rotas().login);
        }
    });
    
    app.get(rotasLivro.list, livroController.list());

    app.route(rotasLivro.register)
        .get(livroController.form())
        .post(Livro.validations(), livroController.create())
        .put(livroController.update());

    app.get(rotasLivro.update, livroController.getById());

    app.delete(rotasLivro.delete, livroController.delete());
}