'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let even_collection =  [];
  for (let elem of collection){
    if (elem % 2 === 0) {
      even_collection.push(elem);
    }
  }
  return even_collection;
}

module.exports = collect_all_even;
