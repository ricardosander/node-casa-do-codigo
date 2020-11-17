# node-casa-do-codigo

Projeto desenvolvido durante a formação [Fundamentos Nodejs da Alura](https://cursos.alura.com.br/course/nodejs-fundamentos).

## Conhecimentos adquiridos
- Plataforma Node
- Módulo HTTP do Node
- Gerenciador de Pacotes do Node (Node Package Manager) - npm
- Framework Express
- Rotas com Express
- Exportação de informações e funcionalidades de módulos Node
- Nodemon para produtividade dev
- Templates dinâmicos com MarkoJS

### Instalando e usando o nodemon

Existem diversas apps para nos ajudarem com a produtividade. Entre eles, existem o que reexecutam o app toda vez que uma alteração é detectada. Um deles, é o nodemon.

Instalando nodemon no projeto. A opção --save-dev faz com que a dependência seja necessária apenas durante o desenvolvimento.

```npm install nodemon@1.18.4 --save-dev --save-exact```

Instalando nodemon globalmente (-g)

```npm install -g nodemon@1.18.4 --save-exact```

Executando nodemon

```nodemon server.js```

Também podemos automatizar o uso do nodemon dentro do package.json, adicionando o comando a cima dentro de ```scripts.start```.