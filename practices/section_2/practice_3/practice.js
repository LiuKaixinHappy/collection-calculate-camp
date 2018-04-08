function count_same_elements(collection) {
  let result = new Map();
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length === 1) {
      result[collection[i]] = result[collection[i]] === undefined ? 1 : result[collection[i]] += 1;
    } else if (collection[i][1] === '-') {
      let tmp = collection[i].split('-');
      result[tmp[0]] = result[tmp[0]] === undefined ?
        parseInt(tmp[1], 10) : result[tmp[0]] += parseInt(tmp[1], 10);
    } else if (collection[i][1] === '[') {
      let tmp = collection[i].split('[');
      result[tmp[0]] = result[tmp[0]] === undefined ?
        parseInt(tmp[1].split(']')[0], 10) : result[tmp[0]] += parseInt(tmp[1].split(']')[0], 10);
    } else if (collection[i][1] === ':') {
      let tmp = collection[i].split(':');
      result[tmp[0]] = result[tmp[0]] === undefined ?
        parseInt(tmp[1], 10) : result[tmp[0]] += parseInt(tmp[1], 10);
    }
  }
  let new_res = [];
  for (let key in result) {
    new_res.push({'name': key, 'summary': result[key]});
  }
  return new_res;
}

module.exports = count_same_elements;
