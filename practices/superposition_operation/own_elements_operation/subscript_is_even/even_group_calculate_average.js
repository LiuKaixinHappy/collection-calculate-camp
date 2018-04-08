'use strict';
let even_group_calculate_average = function (collection) {
  let even_index_elem = collection.filter((elem, index) => index % 2 !== 0);
  let even = even_index_elem.filter(elem => elem % 2 === 0);
  let group_1 = [];
  let group_2 = [];
  let group_3 = [];
  if (even.length === 0) {
    return [0];
  }
  for (let elem of even) {
    if (elem < 10) {
      group_1.push(elem);
    } else if (elem < 100) {
      group_2.push(elem);
    } else if (elem < 1000) {
      group_3.push(elem);
    }
  }
  let result = [];
  if (group_1.length !== 0) {
    result.push(group_1.reduce((total, current) => total + current) / group_1.length);
  }
  if (group_2.length !== 0) {
    result.push(group_2.reduce((total, current) => total + current) / group_2.length);
  }
  result.push(group_3.reduce((total, current) => total + current) / group_3.length);
  return result;
};
module.exports = even_group_calculate_average;
