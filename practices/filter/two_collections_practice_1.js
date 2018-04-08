'use strict';

function is_contain(collection_b, elem) {
  for (let i of collection_b) {
    if (i === elem) {
      return true;
    }
  }
  return false;
}

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(elem => is_contain(collection_b, elem));
}

module.exports = choose_common_elements;
