function is_contains(object_b, elem) {
  let b_array = object_b['value'];
  return b_array.filter(x => x === elem).length !== 0;
}

function create_updated_collection(collection_a, object_b) {
  for (let elem of collection_a) {
    if (is_contains(object_b, elem['key'])) {
      elem['count'] = elem['count'] - 1;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
