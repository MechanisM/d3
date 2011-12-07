// TODO insert(node, function)?
// TODO insert(function, string)?
// TODO insert(function, function)?
d3_selectionPrototype.insert = function(name, before) {
  name = d3.ns.qualify(name);

  if (typeof before !== "function") before = d3_selection_selector(before);

  function insert() {
    return this.insertBefore(
        document.createElementNS(this.namespaceURI, name),
        before.apply(this, arguments));
  }

  function insertNS() {
    return this.insertBefore(
        document.createElementNS(name.space, name.local),
        before.apply(this, arguments));
  }

  return this.select(name.local ? insertNS : insert);
};
