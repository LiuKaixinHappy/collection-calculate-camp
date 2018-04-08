'use strict';

function hybrid_operation(collection) {
  let tmp = collection.map(elem => elem * 3 + 2);
  return tmp.reduce((total, current) => total + current);
}

module.exports = hybrid_operation;

