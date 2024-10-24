[2, 3, 0, 0, 0, 2];
[2, 4, 0, 0, 4, 2];
function minIncrementOperations(nums: number[], k: number): number {
  let dp = [0, 0];
  for (let i = 3; i < nums.length; i++) {
    const record = [nums[i - 2], nums[i - 1], nums[i]];
    record.sort((a, b) => a - b);
    if (record[2] < k) {
    }
    // dp[]
  }
  return dp[nums.length - 1];
}
