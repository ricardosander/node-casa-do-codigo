const { check } = require('express-validator/check');

const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

const db = require('../../config/database');
const LivroDao = require('../infra/livros-dao');

const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const { request } = require('express');

module.exports = (app) => {

    rotasLivro = LivroController.rotas();
    rotasBase = BaseController.rotas();
    
    app.get(rotasBase.home, baseController.home());
    
    app.get(rotasLivro.list, livroController.list());

    app.get(rotasLivro.register, livroController.form());

    app.post(
        rotasLivro.list, 
        [
            check('titulo').isLength({ min : 5}).withMessage('O título deve conter ao menos 5 caracteres.'),
            check('preco').isCurrency().withMessage('O preço deve ser um valor monerátio válido.')
        ],
        livroController.create()
    );

    app.put(rotasLivro.list, livroController.update());

    app.get(rotasLivro.update, livroController.getById());

    app.delete(rotasLivro.delete, livroController.delete());
}