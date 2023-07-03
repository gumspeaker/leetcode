type ListNode = {
  val: number;
  next: ListNode | null;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let s1: number[] = [];
  let s2: number[] = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let cur: any = { next: null };
  let ans = cur;
  let p: number[] = [];
  let jin = false;
  while (s1.length || s2.length) {
    let sum = 0;
    if (s1.length === 0) {
      sum += s2.pop()!;
    } else if (s2.length === 0) {
      sum += s1.pop()!;
    } else {
      sum += s2.pop()! + s1.pop()!;
    }
    if (jin) {
      sum++;
      jin = false;
    }
    if (sum >= 10) {
      sum -= 10;
      jin = true;
    }
    p.push(sum);
  }
  if (jin) {
    p.push(1);
  }
  while (p.length) {
    let node: ListNode = { val: p.pop()!, next: null };
    cur.next = node;
    cur = cur.next;
  }
  return ans.next;
}
export {};
