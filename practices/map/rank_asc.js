'use strict';
let rank_asc = function(collection){
  return collection.sort((x, y) => y - x);
};

module.exports = rank_asc;
