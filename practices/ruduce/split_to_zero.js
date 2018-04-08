'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  for (let i = number; i > 0; i -= interval) {
    result.push(parseFloat(i.toFixed(1)));
  }
  let last_elem = result[result.length - 1];
  if (last_elem !== 0) {
    result.push(parseFloat((last_elem - interval).toFixed(1)));
  }
  return result;
}

module.exports = spilt_to_zero;
