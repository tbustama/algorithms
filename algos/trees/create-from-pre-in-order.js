var buildTree = function (preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) {
    return null;
  }
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(
    preorder.slice(mid + 1, preorder.length),
    inorder.slice(mid + 1, inorder.length)
  );

  return new TreeNode(root.val, root.left, root.right);
};
