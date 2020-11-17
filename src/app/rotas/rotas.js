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
}