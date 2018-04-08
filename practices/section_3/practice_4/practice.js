function is_contains(object_b, elem) {
  let b_array = object_b['value'];
  return b_array.filter(x => x === elem).length !== 0;
}

function create_updated_collection(collection_a, object_b) {
  let result = new Map();
  for (let i = 0; i < collection_a.length; i++) {
    let tmp = collection_a[i].split('-');
    if (tmp.length !== 1) {
      result[tmp[0]] = parseInt(tmp[1], 10);
    } else {
      result[collection_a[i]] = result[collection_a[i]] === undefined ? 1 : result[collection_a[i]] += 1;
    }
  }
  let collection_c = [];
  for (let key in result) {
    collection_c.push({'key': key, 'count': result[key]});
  }
  for (let elem of collection_c) {
    if (is_contains(object_b, elem['key'])) {
      elem['count'] = elem['count'] - Math.floor(elem['count'] / 3.0);
    }
  }
  return collection_c;
}

module.exports = create_updated_collection;
