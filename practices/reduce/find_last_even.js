'use strict';

function find_last_even(collection) {
  for (let i = collection[collection.length - 1]; i >= 0; i--) {
    if (collection[i] % 2 === 0) {
      return collection[i];
    }
  }
  return 0;
}

module.exports = find_last_even;
