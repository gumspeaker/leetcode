// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let cur = head;
  while (list1 !== null || list2 !== null) {
    if (!list1) {
      insertL2();
      cur = cur.next as any;
      continue;
    }
    if (!list2) {
      insertL1();
      cur = cur.next as any;
      continue;
    }
    if (list1.val > list2.val) {
      insertL2();
    } else {
      insertL1();
    }
    cur = cur.next as any;
  }
  return head.next;

  function insertL1() {
    cur.next = list1;
    list1 = list1!.next;
  }

  function insertL2() {
    cur.next = list2;
    list2 = list2!.next;
  }
}
