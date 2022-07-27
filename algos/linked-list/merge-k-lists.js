var mergeKLists = function (lists) {
  if (lists.length === 0 || !lists) {
    return null;
  }
  while (lists.length > 1) {
    let merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged.push(mergeLists(l1, l2));
    }
    lists = merged;
  }
  return lists[0];
};

const mergeLists = (l1, l2) => {
  let nullNode = { val: 0, next: null };
  let prev = nullNode;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 || l2;

  return nullNode.next;
};
