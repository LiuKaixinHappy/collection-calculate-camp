'use strict';

function handle(elem) {
  if (elem <= 26) {
    return String.fromCharCode(96 + elem);
  }
  return String.fromCharCode(96 + (elem - 1) / 26) + String.fromCharCode(97 + (elem - 1) % 26);
}

let number_map_to_word_over_26 = function(collection){
  return collection.map(elem => handle(elem));
};

module.exports = number_map_to_word_over_26;
