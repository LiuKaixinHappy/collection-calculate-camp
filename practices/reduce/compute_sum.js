'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((total, current) => {return total + current;});
}

module.exports = calculate_elements_sum;

