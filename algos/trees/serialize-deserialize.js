var serialize = function (root) {
  let res = [];
  const dfs = (node) => {
    if (!node) {
      res.push("N");
      return;
    }
    res.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let vals = data.split(",");
  let i = 0;
  const dfs = () => {
    if (vals[i] === "N") {
      i += 1;
      return null;
    }
    let node = new TreeNode(parseInt(vals[i]));
    i += 1;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};
