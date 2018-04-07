'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  let result = [];
  for (let elem of collection) {
    if (elem % 3 === 0) {
      result.push(elem)
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
