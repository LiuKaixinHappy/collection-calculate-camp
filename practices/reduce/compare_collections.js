'use strict';

function compare_collections(collection_a, collection_b) {
  return new Array(collection_a.filter((elem, index) => elem - collection_b[index] !== 0)).length !== 0;
}

module.exports = compare_collections;


