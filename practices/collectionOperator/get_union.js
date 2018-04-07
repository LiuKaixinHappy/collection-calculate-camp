'use strict';

function a_is_contains(collection_a, elem) {
  for (let a_elem of collection_a) {
    if (a_elem === elem) {
      return true;
    }
  }
  return false;
}

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (let elem of collection_b) {
    if (!a_is_contains(collection_a, elem)) {
      collection_a.push(elem);
    }
  }
  return collection_a;
}

module.exports = get_union;

