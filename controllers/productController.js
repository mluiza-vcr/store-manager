const Product = require('../services/productService');
const ProductModel = require('../models/productModel');

const objErr = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
};

const idErr = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
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

const getAllProducts = async (req, res) => {
  const products = await ProductModel.getAll();
  res.status(200).json({ products });
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);
  if (!product) {
    return res.status(422).json(idErr);
  }
  res.status(200).json(product);
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const update = await ProductModel.updateById(id, name, quantity);
  return res.status(200).json(update);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await ProductModel.deleteById(id);
  return res.status(200).json(deleteProduct);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};