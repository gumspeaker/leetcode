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
function isPalindrome(head: ListNode | null): boolean {
  let m = head;
  let s = head;
  let arr = [head?.val];
  while (s !== null && s.next !== null) {
    m = m?.next!;
    s = s?.next?.next!;
  }

  return true;
}
