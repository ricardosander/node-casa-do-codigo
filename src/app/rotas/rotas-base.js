const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

module.exports = (app) => {
    rotasBase = BaseController.rotas();
    app.get(rotasBase.home, baseController.home());
}