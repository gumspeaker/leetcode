/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type ListNode = { val: number; next: ListNode | null };
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let ans: ListNode = { val: 0, next: null };
  let cur = ans;
  let upper = false;
  while (l2 !== null || l1 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (upper) {
      sum++;
      upper = false;
    }
    if (sum >= 10) {
      sum -= 10;
      upper = true;
    }
    let node = { val: sum, next: null };
    cur.next = node;
    cur = cur.next;
  }
  if (upper) {
    cur.next = {
      val: 1,
      next: null,
    };
  }
  return ans.next;
}
export {};
