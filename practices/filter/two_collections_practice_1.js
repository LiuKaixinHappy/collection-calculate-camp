'use strict';

function is_contain(collection_b, elem) {
  return collection_b.filter(x => x === elem).length !== 0;
}

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(elem => is_contain(collection_b, elem));
}

module.exports = choose_common_elements;
