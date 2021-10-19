const Router = require('express').Router();
const productController = require('../controllers/productController');
const productMiddlewares = require('../middlewares/productMiddlewares');

Router.post('/', productMiddlewares.validateName,
  productMiddlewares.validateQuantity,
  productController.createProduct);

Router.get('/', productController.getAllProducts);

Router.get('/:id', productController.getProductById);

Router.put('/:id', productMiddlewares.validateName,
productMiddlewares.validateQuantity,
productController.updateProductById);

module.exports = Router;
