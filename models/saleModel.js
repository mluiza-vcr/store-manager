// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (item) => {
  const db = await connection();
  const inserted = await db.collection('sales')
    .insertOne({ itensSold: item });
  return { _id: inserted.insertedId, itensSold: item };
};

module.exports = {
  create,
};