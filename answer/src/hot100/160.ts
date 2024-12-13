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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pA = headA;
  let pB = headB;
  let map = new Set<ListNode | null>([pA]);
  let map2 = new Set<ListNode | null>([pB]);
  let flag = false;
  if (pA === pB) return pA;
  while (pA?.next || pB?.next) {
    if (flag) {
      pB = pB?.next!;
      pB && map2.add(pB);
      if (map.has(pB)) {
        return pB;
      }
    } else {
      pA = pA?.next!;
      pA && map.add(pA);
      if (map2.has(pA)) {
        return pA;
      }
    }
    flag = !flag;
  }

  return null;
}
