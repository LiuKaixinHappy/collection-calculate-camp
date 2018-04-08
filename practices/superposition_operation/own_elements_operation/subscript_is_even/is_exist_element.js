'use strict';
let is_exist_element = function(collection,element){
  let even_index_elem = collection.filter((elem, index) => index % 2 === 0);

  return even_index_elem.filter(x => x === element).length !== 0;
};
module.exports = is_exist_element;
