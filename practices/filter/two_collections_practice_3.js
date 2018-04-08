'use strict';

function divide_by(collection_b, elem) {
  return collection_b.filter(x => elem % x === 0).length !== 0;
}

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(elem => divide_by(collection_b, elem));
}

module.exports = choose_divisible_integer;
