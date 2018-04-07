'use strict';

function a_is_contains(collection_a, elem) {
  for (let i = 0; i < collection_a.length; i++) {
    if (collection_a[i] === elem) {
      return true;
    }
  }
  return false;
}

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (let i = 0; i < collection_b.length; i++) {
    if (!a_is_contains(collection_a, collection_b[i])) {
      collection_a.push(collection_b[i]);
    }
  }
  return collection_a;
}

module.exports = get_union;

