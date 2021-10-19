const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async ({ name, quantity }) => {
  const db = await connection();
  const inserted = await db.collection('products').insertOne({ name, quantity });
  return { _id: inserted.insertedId, name, quantity };
};

const getAll = async () => {
  const db = await connection();
  const all = await db.collection('products').find().toArray();
  return all;
};

const getById = async (id) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const product = await db.collection('products').findOne({ _id: ObjectId(id) });
  return product;
};

const updateById = async (id, name, quantity) => {
  if (!(ObjectId.isValid(id))) return null;
  const db = await connection();
  const update = await db.collection('products').findOneAndUpdate({ _id: ObjectId(id) },
    { $set: { name, quantity } }, { returnDocument: 'after' });
  return update.value;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};