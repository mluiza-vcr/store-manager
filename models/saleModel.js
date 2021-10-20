const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (item) => {
  const db = await connection();
  const inserted = await db.collection('sales')
    .insertOne({ itensSold: item });
  return { _id: inserted.insertedId, itensSold: item };
};

const getAll = async () => {
  const db = await connection();
  const all = await db.collection('sales').find().toArray();
  return all;
};

const getById = async (id) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const sale = await db.collection('sales').findOne({ _id: ObjectId(id) });
  return sale;
};

const updateById = async (id, ...array) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const update = await db.collection('sales').findOneAndUpdate({ _id: ObjectId(id) },
    { $set: { itensSold: array } }, { returnDocument: 'after' });
  return update.value;
};

const deleteById = async (id) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const deleteProduct = await db.collection('sales').findOneAndDelete({ _id: ObjectId(id) });
  return deleteProduct.value;
};


module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};