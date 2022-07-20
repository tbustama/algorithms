var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(root, max, min) {
  if (!root) {
    return true;
  } else if (
    (max !== null && root.val >= max) ||
    (min !== null && root.val <= min)
  ) {
    return false;
  } else
    return (
      validate(root.left, root.val, min) && validate(root.right, max, root.val)
    );
}
