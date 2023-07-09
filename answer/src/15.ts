function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];
  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else if (nums[i] + nums[l] + nums[r] === 0) {
        ans.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] == nums[l + 1]) l++; // 去重
        while (l < r && nums[r] == nums[r - 1]) r--; // 去重

        l++;
        r--;
      } else {
        l++;
      }
    }
    if (nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return ans;
}
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

export {};
