var reverseList = function (head) {
  if (head === null) {
    return head;
  }
  let tempNext = null;
  let cur = head;
  let curNext = head.next;
  while (curNext !== null) {
    cur.next = tempNext;
    tempNext = cur;
    cur = curNext;
    curNext = curNext.next;
  }
  cur.next = tempNext;
  return cur;
};
