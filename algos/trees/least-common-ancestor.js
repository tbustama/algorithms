var lowestCommonAncestor = function (root, p, q) {
  let cur = root;
  while (cur) {
    let val = cur.val;
    if ((val >= p.val && val <= q.val) || (val <= p.val && val >= q.val)) {
      return cur;
    } else if (val > p.val && val > q.val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
};
