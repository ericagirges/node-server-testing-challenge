const db = require('../data/dbConfig.js');

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById,
};

async function add(sailorScout) {
  return null;
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

function findById(id) {
  return null;
}