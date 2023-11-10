var smallestMissingValueSubtree = function (parents, nums) {
  const n = parents.length;
  const children = new Array(n).fill(0).map(() => new Array());
  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }

  const geneSet = new Set();
  const visited = new Array(n).fill(0);
  const dfs = function (node) {
    if (visited[node]) {
      return;
    }
    visited[node] = 1;
    geneSet.add(nums[node]);
    for (const child of children[node]) {
      dfs(child);
    }
  };

  const res = new Array(n).fill(1);
  let iNode = 1,
    node = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      node = i;
      break;
    }
  }
  while (node != -1) {
    dfs(node);
    while (geneSet.has(iNode)) {
      iNode++;
    }
    res[node] = iNode;
    node = parents[node];
  }
  return res;
};
