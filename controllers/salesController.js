// const Sale = require('../services/saleService');
const SaleModel = require('../models/saleModel');

const createSale = async (req, res) => {
  const data = await SaleModel.create(req.body);
  res.status(200).json(data);
};

module.exports = {
  createSale,
};