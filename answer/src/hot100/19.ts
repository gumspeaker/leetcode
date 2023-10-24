function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let quickN = head;
  let _head = head;
  while (n > 0) {
    quickN = quickN?.next!;
  }
  while (quickN !== null) {
    quickN = quickN.next;
    _head = _head?.next!;
  }
  const deleted = _head?.next;
  _head!.next = deleted?.next!;
  return head;
}
