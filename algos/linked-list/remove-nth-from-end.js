var removeNthFromEnd = function (head, n) {
  let lead = head;
  let curr = head;
  for (let i = 0; i < n; i++) {
    lead = lead.next;
  }

  if (!lead) {
    return head.next;
  }

  while (lead.next) {
    curr = curr.next;
    lead = lead.next;
  }
  curr.next = curr.next.next;
  return head;
};
