'use strict';

function is_even(number) {
  return number % 2 === 0;
}

function get_decrease_even_interval(number_a, number_b) {
  let interval = [];
  for (let i = number_a; i >= number_b; i--) {
    if (is_even(i)) {
      interval.push(i);
    }
  }
  return interval;
}

function get_increase_even_interval(number_a, number_b) {
  let interval = [];
  for (let i = number_a; i <= number_b; i++) {
    if (is_even(i)) {
      interval.push(i);
    }
  }
  return interval;
}

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a > number_b) {
    return get_decrease_even_interval(number_a, number_b);
  } else {
    return get_increase_even_interval(number_a, number_b);
  }
}

module.exports = get_integer_interval_2;
