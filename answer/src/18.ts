function fourSum(nums: number[], target: number): number[][] {
  let res: number[][] = [];
  let memo = new Set();
  let used = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  function dfs(ans: number[], start: number) {
    if (ans.length === 4) {
      if (ans[0] + ans[1] + ans[2] + ans[3] === target) {
        if (!memo.has(ans.join(","))) {
          res.push([...ans]);
        }
      }
      memo.add(ans.join(","));

      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (used[i]) {
        continue;
      } else {
        used[i] = true;
        ans.push(nums[i]);
        dfs(ans, i + 1);
        ans.pop();
        used[i] = false;
      }
    }
  }
  dfs([], 0);
  return res;
}
let nums = [
  -500, -481, -480, -469, -437, -423, -408, -403, -397, -381, -379, -377, -353,
  -347, -337, -327, -313, -307, -299, -278, -265, -258, -235, -227, -225, -193,
  -192, -177, -176, -173, -170, -164, -162, -157, -147, -118, -115, -83, -64,
  -46, -36, -35, -11, 0, 0, 33, 40, 51, 54, 74, 93, 101, 104, 105, 112, 112,
  116, 129, 133, 146, 152, 157, 158, 166, 177, 183, 186, 220, 263, 273, 320,
  328, 332, 356, 357, 363, 372, 397, 399, 420, 422, 429, 433, 451, 464, 484,
  485, 498, 499,
];
let target = 2139;
console.log(fourSum(nums, target));
export {};
