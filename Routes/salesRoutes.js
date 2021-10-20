const Router = require('express').Router();
const salesController = require('../controllers/salesController');
const salesMiddlewares = require('../middlewares/saleMiddlewares');

Router.post('/', salesMiddlewares.validateId,
  salesMiddlewares.validateQuantity,
  salesController.createSale);

Router.get('/', salesController.getAllSales);

Router.get('/:id', salesController.getSaleById);

module.exports = Router;