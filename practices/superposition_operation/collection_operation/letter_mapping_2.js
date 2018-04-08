'use strict';

function average_to_letter(collection) {
  let sum = collection.reduce((total, current) => total + current);
  let ave = sum / collection.length;

  return  String.fromCharCode(96 + Math.ceil(ave));
}

module.exports = average_to_letter;

