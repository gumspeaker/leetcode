type ListNode = {
  val: number;
  next: ListNode | null;
};
function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let _head = head;
  let memoSum = 0;
  let cache: any = {};
  while (_head) {
    memoSum += _head.val;
    cache[memoSum] = _head;
    _head = _head.next;
  }
  _head = head;
  while (_head) {
    memoSum += _head.val;
    _head.next = cache[memoSum].next;
  }

  return head;
}
