'use strict';
let calculate_median = function(collection){
  let even_index_elem = collection.filter((elem, index) => index % 2 !== 0);
  if (even_index_elem.length % 2 === 0) {
    return (even_index_elem[even_index_elem.length / 2] + even_index_elem[even_index_elem.length / 2 - 1]) / 2;
  } else {
    return even_index_elem[(even_index_elem.length - 1) / 2];
  }
};
module.exports = calculate_median;
