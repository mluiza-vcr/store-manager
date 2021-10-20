// const Sale = require('../services/saleService');
const SaleModel = require('../models/saleModel');

const saleErr = {
  err: {
    code: 'not_found',
    message: 'Sale not found',
  },
};

const createSale = async (req, res) => {
  const data = await SaleModel.create(req.body);
  res.status(200).json(data);
};

const getAllSales = async (req, res) => {
  const allSales = await SaleModel.getAll();
  res.status(200).json({ sales: allSales });
};

const getSaleById = async (req, res) => {
  const getSale = await SaleModel.getById(req.params.id);
  if (!getSale) return res.status(404).json(saleErr);
  res.status(200).json(getSale);
};

const updateSale = async (req, res) => {
  const update = await SaleModel.updateById(req.params.id, ...req.body);
  res.status(200).json(update);
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  updateSale,
};