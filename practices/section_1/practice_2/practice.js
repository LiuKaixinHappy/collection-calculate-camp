function is_contains(collection_b, elem) {
  return collection_b.filter(x => x === elem).length !== 0;
}

function collect_same_elements(collection_a, collection_b) {
  let flattern = [].concat.apply([], collection_b);
  return collection_a.filter(elem => is_contains(flattern, elem));
}

module.exports = collect_same_elements;
