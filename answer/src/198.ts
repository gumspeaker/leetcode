function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }
  let dp: number[] = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    const element = nums[i];
    let pre = dp[i - 1];
    let prePre = dp[i - 2];
    dp[i] = Math.max(prePre + element, pre);
  }
  return dp[dp.length - 1];
}
console.log(rob([2, 7, 9, 3, 1]));
