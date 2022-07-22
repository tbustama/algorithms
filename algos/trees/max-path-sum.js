var maxPathSum = function (root) {
  let res = [root.val];
  const dfs = (root) => {
    if (!root) {
      return 0;
    }
    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(0, leftMax);
    rightMax = Math.max(0, rightMax);
    // assuming you split at that node
    res[0] = Math.max(res[0], root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  };
  dfs(root);
  return res[0];
};
