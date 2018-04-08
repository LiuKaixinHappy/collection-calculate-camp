'use strict';

function rank_by_two_large_one_small(collection) {
  let asc_sort = collection.sort((x, y) => x - y);

  for (let i = 0; i < asc_sort.length - 3; i+=3) {
    let tmp = asc_sort[i];
    asc_sort[i] = asc_sort[i + 1];
    asc_sort[i + 1] = asc_sort[i + 2];
    asc_sort[i + 2] = tmp;
  }
  return asc_sort;
}

module.exports = rank_by_two_large_one_small;
