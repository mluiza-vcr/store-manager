const Product = require('../services/productService');

const objErr = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
};

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const data = await Product.createNewProduct(name, quantity);
    if (!data) return res.status(422).json(objErr);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro de conexão com o banco' });
  }
};

module.exports = {
  createProduct,
};