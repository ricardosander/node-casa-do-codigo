const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const { request } = require('express');

const Livro = require('../models/livro');

module.exports = (app) => {

    rotasLivro = LivroController.rotas();
    
    app.get(rotasLivro.list, livroController.list());

    app.route(rotasLivro.register)
        .get(livroController.form())
        .post(Livro.validations(), livroController.create())
        .put(livroController.update());

    app.get(rotasLivro.update, livroController.getById());

    app.delete(rotasLivro.delete, livroController.delete());
}