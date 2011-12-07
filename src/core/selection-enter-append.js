d3_selection_enterPrototype.append = function(name) {
  return this.insert(name, d3_selection_enterBefore);
};

function d3_selection_enterBefore(d, i, sibling) {
  return sibling;
}
