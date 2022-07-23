var kthSmallest = function (root, k) {
  let count = 1;
  let result = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }

    dfs(node.left);
    if (count === k) {
      result[0] = node.val;
    }
    count++;
    dfs(node.right);
  };
  dfs(root);
  return result[0];
};
