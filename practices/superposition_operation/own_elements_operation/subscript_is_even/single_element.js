'use strict';

function is_not_in_repeat(repeat, elem) {
  return repeat.filter(x => x === elem).length === 0;
}

let single_element = function(collection){
  let even_index_elem = collection.filter((elem, index) => index % 2 !== 0);
  let repeat = even_index_elem.filter((elem, index, array) => array.indexOf(elem) !== index);
  return even_index_elem.filter(elem => is_not_in_repeat(repeat, elem));
};
module.exports = single_element;
