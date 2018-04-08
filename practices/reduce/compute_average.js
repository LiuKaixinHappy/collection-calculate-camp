'use strict';

function compute_average(collection) {
  return collection.reduce((total, current) => {return total + current;}) / collection.length;
}

module.exports = compute_average;

