class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0;
  function dfs(root: TreeNode | null, beforeSums: number[]) {
    if (!root) return;
    beforeSums.forEach((sum, index) => {
      const nextVal = sum + root.val;
      if (nextVal === targetSum) res++;
      beforeSums[index] = nextVal;
    });
    if (root.val === targetSum) res++;
    beforeSums.push(root.val);
    dfs(root.left, [...beforeSums]);
    dfs(root.right, [...beforeSums]);
  }
  dfs(root, []);
  return res;
}

export default pathSum;
