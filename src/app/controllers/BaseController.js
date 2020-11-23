const templates = require('../views/templates');

class BaseController {

    static rotas() {
        return {
            home: '/'
        };
    }

    home() {
        return (request, response) => {
            response.marko(
                require('../views/base/home/home.marko')
            );
        }
    }
}

module.exports = BaseController;