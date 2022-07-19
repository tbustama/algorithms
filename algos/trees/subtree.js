var isSubtree = function (root, subRoot) {
  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }

  if (compare(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const compare = (r, s) => {
  if (!r && !s) {
    return true;
  }
  if (r && s && r.val === s.val) {
    return compare(r.left, s.left) && compare(r.right, s.right);
  }
  return false;
};
