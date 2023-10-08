class LRUCache {
  capacity: number;
  value: Record<number, number>;
  arr: Record<number, ListNode>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.value = {};
    this.arr = {};
  }

  get(key: number): number {
    if (this.value[key]) {
    }
    return this.value[key];
  }

  put(key: number, value: number): void {
    let node = new ListNode(key, value);
    // node.
    this.value[key] = value;
  }
}
export class ListNode {
  key: number;
  value: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
