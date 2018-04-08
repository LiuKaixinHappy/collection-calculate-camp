'use strict';
var number_map_to_word = function(collection){
  return collection.map(elem => String.fromCharCode(96 + elem));
};

module.exports = number_map_to_word;
