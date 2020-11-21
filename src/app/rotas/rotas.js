const LivroDao = require('../infra/livros-dao')
const db = require('../../config/database');

module.exports = (app) => {
    
    app.get('/', (request, response) => {
        response.marko(
            require('../views/base/home/home.marko')
        );
    });
    
    app.get('/livros', (request, response) => {
 
        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(livros => {
                    response.marko(
                        require('../views/livros/lista/lista.marko'),
                        { livros: livros }
                    );
                })
                .catch(erro => console.log(erro));
    });

    app.get('/livros/form', (request, response) => {
        response.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.post('/livros', (request, response) => {
        console.log(request.body);

        const livroDao = new LivroDao(db);
        livroDao.adiciona(request.body)
            .then(response.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.put('/livros', (request, response) => {
        console.log(request.body);

        const livroDao = new LivroDao(db);
        livroDao.atualiza(request.body)
            .then(response.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form/:id', (request, response, next) => {

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
    });

    app.delete('/livros/:id', (request, response) => {
        
        const id = request.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
            .then(() => response.status(200).end())
            .catch(erro => response.send(erro));
    });
}