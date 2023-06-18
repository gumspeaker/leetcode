function maxSumDivThree(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let all = nums.reduce((s, i) => s + i, 0);
}
