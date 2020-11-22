const { check } = require('express-validator/check');

const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

const db = require('../../config/database');
const LivroDao = require('../infra/livros-dao');

const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const { request } = require('express');

module.exports = (app) => {
    
    app.get('/', baseController.home());
    
    app.get('/livros', livroController.list());

    app.get('/livros/form', livroController.form());

    app.post(
        '/livros', 
        [
            check('titulo').isLength({ min : 5}).withMessage('O título deve conter ao menos 5 caracteres.'),
            check('preco').isCurrency().withMessage('O preço deve ser um valor monerátio válido.')
        ],
        livroController.create()
    );

    app.put('/livros', livroController.update());

    app.get('/livros/form/:id', livroController.getById());

    app.delete('/livros/:id', livroController.delete());
}