'use strict';

function one_add_next_multiply_three(collection) {

  let tmp = collection.map((elem, index, array) => {
    if (index !== array.length - 1) {
      return (elem + array[index + 1]) * 3;
    }
  });
  return tmp.filter(elem => elem !== undefined);
}

module.exports = one_add_next_multiply_three;
