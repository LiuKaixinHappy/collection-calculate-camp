'use strict';
let even_asc_odd_desc = function(collection){
  let even_asc = collection.filter(elem => elem % 2 === 0).sort((x, y) => x - y);
  let odd_des = collection.filter(elem => elem % 2 !== 0).sort((x, y) => y - x);
  let result = [];
  result.push(even_asc);
  result.push(odd_des);
  return [].concat.apply([], result);
};
module.exports = even_asc_odd_desc;
