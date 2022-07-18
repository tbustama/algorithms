var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = [];
  while (queue.length) {
    let temp = [];
    const numNodes = queue.length;
    for (let i = 0; i < numNodes; i++) {
      const subTree = queue.shift();
      temp.push(subTree.val);
      if (subTree.left) {
        queue.push(subTree.left);
      }
      if (subTree.right) {
        queue.push(subTree.right);
      }
    }
    result.push(temp);
  }
  return result;
};
