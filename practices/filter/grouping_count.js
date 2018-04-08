'use strict';

function grouping_count(collection) {
  let result = {};
  collection.filter(elem => {
    if (result[elem] === undefined) {
      result[elem] = 1;
    } else {
      result[elem] += 1;
    }
  });
  return result;
}

module.exports = grouping_count;
