'use strict';

function grouping_count(collection) {
  let sort_collection = collection.sort();

  let unique_index = sort_collection.filter((element, index, array) => {
    return array.indexOf(element) === index;
  });

  let result = {};
  for (let i = 0; i < unique_index.length - 1; i++) {
    result[unique_index[i]] = sort_collection.indexOf(unique_index[i + 1])
      - sort_collection.indexOf(unique_index[i]);
  }
  result[unique_index[unique_index.length - 1]] =
    sort_collection.length - sort_collection.indexOf(unique_index[unique_index.length - 1]);

  return result;
}

module.exports = grouping_count;
