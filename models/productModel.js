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

module.exports = {
  create,
  getAll,
};