function minimumIncompatibility(nums: number[], k: number): number {
  let ans = Number.MAX_SAFE_INTEGER;
  let map: any = {};
  // 比k大说明无法分配好
  let maxNumsSize = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    map[element] = (map[element] ?? 0) + 1;
    maxNumsSize = Math.max(map[element], maxNumsSize);
  }
  if (maxNumsSize > k) {
    return -1;
  }
  const used = new Array(nums.length).fill(false);
  let usedNumber = 0;
  function dfs(_arr: Set<number>[]) {
    if (usedNumber === nums.length) {
      if (_arr.some((i) => i.size === 0)) {
        return;
      }
      const sum = _arr.reduce((sum, item) => {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        item.forEach((i) => {
          min = Math.min(min, i);
          max = Math.max(max, i);
        });
        return sum + (max - min);
      }, 0);
      ans = Math.min(sum, ans);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      for (let j = 0; j < _arr.length; j++) {
        if (_arr[j].has(nums[i]) || _arr[j].size >= k) {
          continue;
        } else {
          _arr[j].add(nums[i]);
          usedNumber++;
          used[i] = true;
          dfs(_arr);
          used[i] = false;
          usedNumber--;
          _arr[j].delete(nums[i]);
        }
      }
    }
  }
  dfs(new Array(k).fill(0).map(() => new Set()));

  return ans;
}
let nums = [6, 3, 8, 1, 3, 1, 2, 2],
  k = 4;
minimumIncompatibility(nums, k);
export {};
