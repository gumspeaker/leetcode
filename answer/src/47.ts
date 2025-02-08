function permuteUnique(nums: number[]): number[][] {
  let used = new Array(nums.length).fill(0);
  function dfs(result: number[] = []) {
    if (result.length === nums.length) {
      return res.push([...result]);
    }
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue;
      }
      used[i] = true;
      result.push(cur);
      dfs(result);
      used[i] = false;
      result.pop();
    }
  }
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  dfs();
  return res;
}
console.log(permuteUnique([1, 2, 3]));
