function maxAlternatingSum(nums: number[]): number {
  let dp: number[] = [];
  dp[0] = nums[0];

  return dp[dp.length - 1];
}
