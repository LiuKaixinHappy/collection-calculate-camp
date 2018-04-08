'use strict';

function double_to_one(collection) {
  return [].concat.apply([], collection)
    .filter((elem, index, array) =>array.indexOf(elem) === index);
}

module.exports = double_to_one;
