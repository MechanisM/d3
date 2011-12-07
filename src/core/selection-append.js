// TODO append(node)?
// TODO append(function)?
d3_selectionPrototype.append = function(name) {
  return this.insert(name, d3_selection_appendNull);
};

function d3_selection_appendNull() {
  return null;
}
