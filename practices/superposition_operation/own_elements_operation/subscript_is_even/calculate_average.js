'use strict';
let calculate_average = function(collection){
  let even_index_elem = collection.filter((elem, index) => index % 2 !== 0);
  let sum = even_index_elem.reduce((total, current) => total + current);
  return sum / even_index_elem.length;
};
module.exports = calculate_average;
