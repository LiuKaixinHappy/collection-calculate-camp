'use strict';

function compute_chain_median(collection) {
  let array = collection.split('->').map(elem => parseInt(elem, 10)).sort((x, y) => {return x - y;});
  return array.length % 2 === 0 ? (array[array.length / 2] + array[array.length / 2] - 1) / 2 :
    (array[(array.length - 1) / 2]);
}

module.exports = compute_chain_median;
