const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const { request } = require('express');

const Livro = require('../models/livro');

module.exports = (app) => {

    rotasLivro = LivroController.rotas();
    rotasBase = BaseController.rotas();
    
    app.get(rotasBase.home, baseController.home());
    
    app.get(rotasLivro.list, livroController.list());

    app.get(rotasLivro.register, livroController.form());

    app.post(
        rotasLivro.register, 
        Livro.validations(),
        livroController.create()
    );

    app.put(rotasLivro.register, livroController.update());

    app.get(rotasLivro.update, livroController.getById());

    app.delete(rotasLivro.delete, livroController.delete());
}