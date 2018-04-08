'use strict';

function hybrid_operation_to_uneven(collection) {
  let odd = collection.filter(elem => elem % 2 !== 0);
  return odd.map(elem => elem * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

