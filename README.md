# node-casa-do-codigo

Projeto desenvolvido durante as formações [Fundamentos Nodejs](https://cursos.alura.com.br/course/nodejs-fundamentos) e [Nodejs: MVC, autenticação e autorização](https://cursos.alura.com.br/course/node-mvc-autenticacao-autorizacao) da Alura.

## Conhecimentos adquiridos
- Plataforma Node
- Módulo HTTP do Node
- Gerenciador de Pacotes do Node (Node Package Manager) - npm
- Framework Express
- Rotas com Express
- Exportação de informações e funcionalidades de módulos Node
- Nodemon para produtividade dev
- Templates dinâmicos com MarkoJS
- SQLite em uma aplicação Node
- Padrão DAO com Promises
- Configuração de rotas POST com Express
- Middlewares
- Módulo body-parser para capturar dados de requisições POST
- Criação de middleware com módulo body-parser
- Criando rota para verbo DELETE e PUT com Express
- Usando path variables nas rotas
- Usando Ajax em aplicações Node
- Utilizando arquivos estáticos com middlewares
- Sobreescrevendo método HTTP com o móduço method-override
- Inclusão de arquivos CSS para uma apresentação mais agradável
- Tratamento de erros 404 e 500
- Validações de dados com Express Validator
- Arquitetura MVC
- Centralizando rotas
- Centralizando templates
- Autenticação de usuários com sessão e cookies
- Injeção de dependências com Middlewares

### Instalando e usando o nodemon

Existem diversas apps para nos ajudarem com a produtividade. Entre eles, existem o que reexecutam o app toda vez que uma alteração é detectada. Um deles, é o nodemon.

Instalando nodemon no projeto. A opção --save-dev faz com que a dependência seja necessária apenas durante o desenvolvimento.

```npm install nodemon@1.18.4 --save-dev --save-exact```

Instalando nodemon globalmente (-g)

```npm install -g nodemon@1.18.4 --save-exact```

Executando nodemon

```nodemon server.js```

Também podemos automatizar o uso do nodemon dentro do package.json, adicionando o comando a cima dentro de ```scripts.start```.