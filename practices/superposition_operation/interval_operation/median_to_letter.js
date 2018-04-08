'use strict';

function median_to_letter(collection) {
  let median;
  if (collection.length % 2 === 0) {
    median = Math.ceil((collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2);
  } else {
    median = Math.ceil(collection[(collection.length - 1) / 2] / 2);
  }
  if (median <= 26) {
    return String.fromCharCode(96 + median);
  } else {
    return String.fromCharCode(96 + (median - 1) / 26) + String.fromCharCode(97 + (median - 1) % 26);
  }
}

module.exports = median_to_letter;
