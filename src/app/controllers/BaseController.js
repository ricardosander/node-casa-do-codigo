class BaseController {

    home() {
        return (request, response) => {
            response.marko(
                require('../views/base/home/home.marko')
            );
        }
    }
}

module.exports = BaseController;