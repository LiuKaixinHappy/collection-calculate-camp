'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((element, index, array) => {
    return array.indexOf(element) === index;
  });
}

module.exports = choose_no_repeat_number;
