'use strict';

function hybrid_operation_to_uneven(collection) {
  let odd = collection.filter(elem => elem % 2 !== 0);
  let map_odd = odd.map(elem => elem * 3 + 5);
  return map_odd.reduce((total, current) => total + current);
}

module.exports = hybrid_operation_to_uneven;

