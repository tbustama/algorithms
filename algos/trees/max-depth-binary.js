var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = 1;
  let current = 1;
  let dfs = function (node, current) {
    if (!node) {
      return;
    }
    max = Math.max(current, max);
    current += 1;
    dfs(node.left, current);
    dfs(node.right, current);
  };
  dfs(root, current);
  return max;
};
