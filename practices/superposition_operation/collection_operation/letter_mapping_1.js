'use strict';

function even_to_letter(collection) {
  let even = collection.filter(elem => elem % 2 === 0);

  return even.map(elem => String.fromCharCode(96 + elem));
}

module.exports = even_to_letter;
