function countPairs(n: number, edges: number[][]): number {
  let unionFind = new UnionFindSets(n);
  for (const edge of edges) {
    unionFind.merge(...(edge as [number, number]));
  }
  let res = 0;
  let map: any = {};
  for (const x of unionFind.parent) {
    map[x] = (map[x] ?? 0) + 1;
  }
  console.log(unionFind.parent);

  for (let i = 0; i < n; i++) {
    const p = unionFind.find(i);

    const s = map[p];

    res += n - s;
  }
  console.log(res);

  return res / 2;
}

class UnionFindSets {
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

let n = 11,
  edges: any = [
    [5, 0],
    [1, 0],
    [10, 7],
    [9, 8],
    [7, 2],
    [1, 3],
    [0, 2],
    [8, 5],
    [4, 6],
    [4, 2],
  ];
countPairs(n, edges);
