const templates = require('../views/templates');
const LivroController = require('./LivroController');

class BaseController {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }

    home() {
        return (request, response) => {
            response.marko(templates.base.home);
        }
    }

    login() {
        return (request, response) => {
            response.marko(templates.base.login);
        }
    }

    efetuarLogin() {
        return (request, response, next) => {

            const passport = request.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                
                if (info) {
                    return response.marko(templates.base.login);
                }

                if (erro) {
                    return next(erro);
                }

                request.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }

                    return response.redirect(LivroController.rotas().list);
                });
            })(request, response, next);
        }
    }
}

module.exports = BaseController;