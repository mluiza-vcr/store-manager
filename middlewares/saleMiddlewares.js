const ProductModel = require('../models/productModel');

const idErr = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
};

const validateId = async (req, res, next) => {
  const sale = req.body;

  const verifyIds = sale.map(async (item) => {
    const product = await ProductModel.getById(item.productId);
    if (!product) {
      return false;
    }
    return true;
  });

  const promiseVerify = await Promise.all(verifyIds);
  if (promiseVerify.some((item) => !item)) return res.status(422).json(idErr);

  next();
};

const validateQuantity = async (req, res, next) => {
  const sale = req.body;

  const quantityErr = sale.some((item) => {
    if (item.quantity < 1) return true;
    if (typeof item.quantity !== 'number') return true;
    return false;
  });

  if (quantityErr) return res.status(422).json(idErr);

  next();
};

module.exports = {
  validateId,
  validateQuantity,
};