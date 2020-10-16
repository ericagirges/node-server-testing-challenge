const db = require('../data/dbConfig.js');

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById,
};

function findById(id) {
    return db("sailorScouts").where({ id }).first();
  }

async function add(sailorScout) {
  return db("sailorScouts")
  .insert(sailorScout, "id")
  .then(ids => {
      const id = ids[0];
      return findById(id);
  });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('sailorScouts');
}

