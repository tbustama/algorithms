var maxDepth = function (root) {
  //   if (!root) {
  //     return 0;
  //   }
  let max = 0;
  let current = 0;
  let dfs = function (node, current) {
    if (!node) {
      return;
    }
    current += 1;
    max = Math.max(current, max);
    dfs(node.left, current);
    dfs(node.right, current);
  };
  dfs(root, current);
  return max;
};
