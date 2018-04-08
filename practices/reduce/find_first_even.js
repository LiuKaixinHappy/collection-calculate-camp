'use strict';

function find_first_even(collection) {
  for (let elem of collection) {
    if (elem % 2 === 0) {
      return elem;
    }
  }
  return 0;
}

module.exports = find_first_even;

