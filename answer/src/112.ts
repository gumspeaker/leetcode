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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let res: number[][] = [];
  function dfs(
    root: TreeNode | null,
    beforePaths: number[],
    targetSum: number
  ) {
    if (!root) return;
    const val = root.val;
    beforePaths.push(root.val);
    if (val === targetSum && !root.left && !root.right) {
      res.push([...beforePaths]);
    }
    dfs(root.left, [...beforePaths], targetSum - val);
    dfs(root.right, [...beforePaths], targetSum - val);
  }
  dfs(root, [], targetSum);
  return res.length > 0;
}
export default hasPathSum;
