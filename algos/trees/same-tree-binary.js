var isSameTree = function (p, q) {
  let result = true;
  const simDFS = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return;
    }
    if (
      (node1 === null && node2 !== null) ||
      (node1 !== null && node2 === null)
    ) {
      result = false;
      return;
    }
    if (node1.val !== node2.val) {
      result = false;
      return;
    }
    simDFS(node1.left, node2.left);
    simDFS(node1.right, node2.right);
  };
  simDFS(p, q);
  return result;
};
