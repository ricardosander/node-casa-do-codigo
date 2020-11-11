const http = require('http');

const server = http.createServer(function(request, response) {
    console.log('Recieving request');
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

const port = 3000;
server.listen(port);
console.log(`Server listening port ${port}`);