function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  let set = new Set<number>();
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let uf = new UnionFind();

  nums.forEach((n) => {
    set.add(n);
    uf.size[n] = 1;
    uf.parent[n] = n;
    min = Math.min(min, n);
    max = Math.max(max, n);
  });
  for (const key of set.values()) {
    if (set.has(key + 1)) {
      uf.union(key, key + 1);
    }
    if (set.has(key - 1)) {
      uf.union(key, key - 1);
    }
  }
  let res = 0;
  for (const v of set) {
    res = Math.max(res, uf.size[v]);
  }
  // console.log(res);

  return res;
}
class UnionFind {
  //用来解决不同节点间是否拥有相同根的问题
  parent: number[];
  size: number[];
  count: number;
  constructor() {
    this.parent = []; //并查集
    this.size = []; //每个节点下拥有的总节点数目
    this.count = 0;
    // this.init(min, max);
  }
  //初始化一个并查集
  init(min: number, max: number) {
    this.parent.length = 0;
    this.size = new Array(max - min).fill(1);
    for (let i = min; i <= max; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
    this.count = max - min;
  }
  // 在并查集中找到节点node的根节点
  find(node: number) {
    while (node != this.parent[node]) {
      // 路径压缩，每次查找时都将子节点的父节点设置为父节点的父节点。这样能够不停的扁平化查询树。
      this.parent[node] = this.parent[this.parent[node]];
      node = this.parent[node];
    }
    return node;
  }
  //判断两个节点的根节点是不是同一个
  same(left: number, right: number) {
    return this.find(left) == this.find(right);
  }
  // 将两个节点关联起来,即两个节点共有一个根节点.和并是将两个节点的根节点合并起来
  union(left: number, right: number) {
    let l = this.find(left);
    let r = this.find(right);
    if (l != r) {
      // 左边较小，因此将左边合并到右边的树上
      if (this.size[l] < this.size[r]) {
        this.parent[l] = r;
        this.size[r] += this.size[l];
      } else {
        this.parent[r] = l;
        this.size[l] += this.size[r];
      }
      // 连通分量减1
      this.count--;
      return true;
    }
    return false;
  }
  //获取总共分了多少组
  getCount() {
    return this.count;
  }
}
longestConsecutive([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999]);
