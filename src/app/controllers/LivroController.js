const { validationResult } = require('express-validator/check');

const db = require('../../config/database');
const LivroDao = require('../infra/livros-dao');

class LivroController {

    static rotas() {
        return {
            list: '/livros',
            register: '/livros/form',
            update: '/livros/form/:id',
            delete: '/livros/:id'
        }
    }

    list() {
        return (request, response) => {
 
            const livroDao = new LivroDao(db);
            livroDao.lista()
                    .then(livros => {
                        response.marko(
                            require('../views/livros/lista/lista.marko'),
                            { livros: livros }
                        );
                    })
                    .catch(erro => console.log(erro));
        }
    }

    getById() {
        return (request, response, next) => {

            const livroId = request.params.id;
    
            const livroDao = new LivroDao(db);
            livroDao.buscaPorId(livroId)
                .then(livro => {
                    response.marko(
                        require('../views/livros/form/form.marko'),
                        { livro }
                    );
                })
                .catch(erro => response.send(erro))
        };
    }

    form() {
        return (request, response) => {
            response.marko(require('../views/livros/form/form.marko'), { livro: {} });
        }
    }

    create() {
        return (request, response) => {

            const erros = validationResult(request);
            if (!erros.isEmpty()) {
                return response.marko(
                    require('../views/livros/form/form.marko'),
                    {
                        livro : request.body,
                        erros: erros.array()
                    }    
                );
            }
    
            const livroDao = new LivroDao(db);
            livroDao.adiciona(request.body)
                .then(response.redirect(LivroController.rotas().list))
                .catch(erro => console.log(erro));
        }
    }

    update() {
        return (request, response) => {
            console.log(request.body);
    
            const livroDao = new LivroDao(db);
            livroDao.atualiza(request.body)
                .then(response.redirect(LivroController.rotas().list))
                .catch(erro => console.log(erro));
        };
    }

    delete() {
        return (request, response) => {
        
            const id = request.params.id;
    
            const livroDao = new LivroDao(db);
            livroDao.remove(id)
                .then(() => response.status(200).end())
                .catch(erro => response.send(erro));
        }
    }

}

module.exports = LivroController;