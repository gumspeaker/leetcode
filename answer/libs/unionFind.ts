export default class UnionFindSets {
  // 用于记录该节点的父节点，所有父节点相同的节点位于同一连通图
  public parent: Array<number> = [];

  // 节点的秩，主要记录该节点目前位于的树的深度，从子节点出发
  // 主要用于优化，在合并两个父节点时，通过rank的大小判断谁父谁子
  public rank: Array<number> = [];

  // 用于记录并查集的数量,某些情况下该成员非必要
  public count: number;

  constructor(n: number) {
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
      this.rank.push(0);
    }
  }

  // 路径压缩， 遍历过程中的所有父节点直接指向根节点，
  // 减少后续查找次数
  public find(x: number) {
    if (this.parent[x] != x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // 合并两个节点
  // 如果处于同一个并查集， 不需要合并
  // 如果不处于同一个并查集，判断两个rootx和rooty谁的秩大
  public merge(x: number, y: number) {
    let xp = this.find(x);
    let yp = this.find(y);
    if (xp !== yp) {
      if (this.rank[xp] < this.rank[yp]) {
        [xp, yp] = [yp, xp];
      }
      this.parent[yp] = xp;
      this.count--;
      if (this.rank[xp] === this.rank[yp]) {
        this.rank[xp] += 1;
      }
    }
  }
}
class UnionFind {
  //用来解决不同节点间是否拥有相同根的问题
  parent: number[];
  size: number[];
  count: number;
  constructor(n: number) {
    this.parent = []; //并查集
    this.size = []; //每个节点下拥有的总节点数目
    this.count = 0;
    this.init(n);
  }
  //初始化一个并查集
  init(n: number) {
    this.parent.length = 0;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
    this.count = n;
    this.size = new Array(n).fill(1);
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
