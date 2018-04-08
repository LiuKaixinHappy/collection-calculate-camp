'use strict';

function not_contains(collection_b, elem) {
  return collection_b.filter(x => x === elem).length === 0;
}

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(elem => not_contains(collection_b, elem));
}

module.exports = choose_no_common_elements;
