'use strict';

function compute_average(collection) {
  let sum = 0.0;
  for (let elem of collection) {
    sum += elem;
  }
  return sum / collection.length;
}

module.exports = compute_average;

