const LivroDao = require('../infra/livros-dao')
const db = require('../../config/database');

module.exports = (app) => {
    
    app.get('/', (request, response) => {
        
        response.end(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            </html>`);
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
        response.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', (request, response) => {
        console.log(request.body);

        const livroDao = new LivroDao(db);
        livroDao.adiciona(request.body)
            .then(response.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/:id', (request, response, next) => {

        const livroId = request.params.id;

        console.log(livroId);

        const livroDao = new LivroDao(db);
        livroDao.buscaPorId(livroId)
            .then(livro => {
                if (!livro) {
                    return response.send('Livro não encontrado.');
                }
                response.send(livro);
            })
            .catch(erro => response.send(erro))
    });
}