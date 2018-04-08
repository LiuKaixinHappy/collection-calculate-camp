'use strict';

function amount_even(collection) {
  let even = collection.filter(elem => elem % 2 === 0);
  return even.reduce((total, current) => total + current);
}

module.exports = amount_even;
