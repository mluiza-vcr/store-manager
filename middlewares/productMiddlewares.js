const ProductModel = require('../models/productModel');

const idErr = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
    });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity < 1) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      },
    });
  }
  if (typeof (quantity) !== 'number') {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
      },
    });
  }
  next();
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);
  if (!product) {
    return res.status(422).json(idErr);
  }
  next();
};

module.exports = {
  validateName,
  validateQuantity,
  getProductById,
};