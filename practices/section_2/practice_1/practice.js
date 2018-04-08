function count_same_elements(collection) {
  let result = new Map();
  for (let i = 0; i < collection.length; i++) {
    result[collection[i]] = result[collection[i]] === undefined ? 1 : result[collection[i]] += 1;
  }
  let new_res = [];
  for (let key in result) {
    new_res.push({'key': key, 'count': result[key]});
  }
  return new_res;
}

module.exports = count_same_elements;
