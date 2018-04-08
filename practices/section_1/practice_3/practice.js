function is_contains(collection_b, elem) {
  return collection_b.filter(x => x === elem).length !== 0;
}

function collect_same_elements(collection_a, object_b) {
  let b = object_b['value'];
  return collection_a.filter(elem => is_contains(b, elem));
}

module.exports = collect_same_elements;
