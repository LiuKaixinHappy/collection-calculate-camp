'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let even_collection =  [];
  for (let i = 0; i < collection.length; i++){
    if (collection[i] % 2 === 0) {
      even_collection.push(collection[i]);
    }
  }
  return even_collection;
}

module.exports = collect_all_even;
