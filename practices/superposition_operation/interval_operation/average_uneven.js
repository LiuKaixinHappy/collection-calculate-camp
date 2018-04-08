'use strict';

function average_uneven(collection) {
  let odd = collection.filter(elem => elem % 2 !== 0);
  let sum = odd.reduce((total, current) => total + current);
  return sum / odd.length;
}

module.exports = average_uneven;
