const Router = require('express').Router();
const salesController = require('../controllers/salesController');
const salesMiddlewares = require('../middlewares/saleMiddlewares');

Router.post('/', salesMiddlewares.validateId,
  salesMiddlewares.validateQuantity,
  salesController.createSale);

  module.exports = Router;