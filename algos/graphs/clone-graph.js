var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  let map = new Map();

  const clone = (node) => {
    if (map.has(node)) {
      return map.get(node);
    }
    const copy = new Node(node.val);
    map.set(node, copy);
    for (let neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }
    return copy;
  };
  return clone(node);
};
