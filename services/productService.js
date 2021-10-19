const Product = require('../models/productModel');

const createNewProduct = async (name, quantity) => {
  const getAll = await Product.getAll();
  const exists = getAll.some((item) => item.name === name);
  if (exists) return false;
  return Product.create({ name, quantity });
};

module.exports = {
  createNewProduct,
};