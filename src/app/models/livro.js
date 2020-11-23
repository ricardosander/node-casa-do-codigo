const { check } = require('express-validator/check');

class Livro {
    
    static validations() {
        return [
            check('titulo').isLength({ min : 5}).withMessage('O título deve conter ao menos 5 caracteres.'),
            check('preco').isCurrency().withMessage('O preço deve ser um valor monerátio válido.')
        ]
    }
}

module.exports = Livro;