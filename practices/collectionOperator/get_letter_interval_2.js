'use strict';

function get_decrease_interval(number_a, number_b) {
  let interval = [];
  for (let j = number_a; j >= number_b; j--) {
    if (j <= 26) {
      interval.push(String.fromCharCode(96 + j));
    } else {
      interval.push(String.fromCharCode(96 + (j - 1) / 26) + String.fromCharCode(97 + (j - 1) % 26));
    }
  }
  return interval;
}

function get_increase_interval(number_a, number_b) {
  let interval = [];
  for (let j = number_a; j <= number_b; j++) {
    if (j <= 26) {
      interval.push(String.fromCharCode(96 + j));
    } else {
      interval.push(String.fromCharCode(96 + (j - 1) / 26) + String.fromCharCode(97 + (j - 1) % 26));
    }
  }
  return interval;
}

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a > number_b) {
    return get_decrease_interval(number_a, number_b);
  } else {
    return get_increase_interval(number_a, number_b);
  }
}

module.exports = get_letter_interval_2;

