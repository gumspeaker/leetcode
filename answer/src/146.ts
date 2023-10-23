export class ListNode1 {
  key: number;
  value: number;
  next: ListNode1 | null;
  prev: ListNode1 | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  capacity: number;
  value: Map<number, ListNode1>;
  listNodeHead: ListNode1;
  listNodeEnd: ListNode1;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.value = new Map();
    this.listNodeHead = new ListNode1(-1, -1);
    this.listNodeEnd = new ListNode1(-2, -2);
    this.listNodeHead.next = this.listNodeEnd;
    this.listNodeEnd.prev = this.listNodeHead;
  }

  get(key: number): number {
    if (this.value.has(key)) {
      const listNode = this.value.get(key)!;
      const pre = listNode?.prev!;
      const after = listNode?.next!;
      pre.next = after;
      after.prev = pre;
      const second = this.listNodeHead.next!;
      this.listNodeHead.next! = listNode;
      second.prev! = listNode;
      return listNode?.value!;
    } else {
      return -1;
    }
  }
  log() {
    Array.from(this.value).map((i) => {
      console.log(this.value.size);
    });
  }

  put(key: number, value: number): void {
    let node: ListNode1;
    if (this.value.has(key)) {
      node = this.value.get(key)!;
      node.value = value;
      return;
    } else {
      node = new ListNode1(key, value);
    }
    if (this.value.size === this.capacity && !this.value.has(key)) {
      const removed = this.listNodeEnd.prev!;
      const unusedPre = removed.prev;
      unusedPre!.next = this.listNodeEnd;
      this.listNodeEnd!.prev = unusedPre!;
      this.value.delete(removed.key);
    }

    this.value.set(key, node);
    const second = this.listNodeHead.next;
    second!.prev = node;
    this.listNodeHead.next = node;
    node.prev = this.listNodeHead;
    node.next = second;
    this.log();
  }
}

const lru = new LRUCache(2);
const op = ["put", "put", "put", "put", "get", "get"] as const;
const value = [[2, 1], [1, 1], [2, 3], [4, 1], [1], [2]];
op.forEach((o, i) => {
  const v = (lru[o] as any)(...value[i]);
  lru.log();
});
