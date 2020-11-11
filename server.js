const app = require('./src/config/custom-express');

const port = 3000;

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (request, response) => {
    console.log(`Recieving request ${request.method} - ${request.url}`);
    
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
    console.log(`Recieving request ${request.method} - ${request.url}`);
    
    response.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
        </html>`);
});