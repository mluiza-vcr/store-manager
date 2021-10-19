const Router = require('express').Router();
const productController = require('../controllers/productController');
const productMiddlewares = require('../middlewares/productMiddlewares');

Router.post('/', productMiddlewares.validateName,
  productMiddlewares.validateQuantity,
  productController.createProduct);

module.exports = Router;