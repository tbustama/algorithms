var reorderList = function (head) {
  // find middle
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse second half
  let second = slow.next;
  slow.next = null;
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge two lists
  let first = head;
  second = prev;
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};
