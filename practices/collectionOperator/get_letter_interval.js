'use strict';

function get_decrease_interval(number_a, number_b) {
  let interval = [];
  for (let i = number_a; i >= number_b; i--) {
    interval.push(String.fromCharCode(96 + i));
  }
  return interval;
}

function get_increase_interval(number_a, number_b) {
  let interval = [];
  for (let i = number_a; i <= number_b; i++) {
    interval.push(String.fromCharCode(96 + i));
  }
  return interval;
}

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a > number_b) {
    return get_decrease_interval(number_a, number_b);
  } else {
    return get_increase_interval(number_a, number_b);
  }
}

module.exports = get_letter_interval;
