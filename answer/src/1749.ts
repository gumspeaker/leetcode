function maxAbsoluteSum(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let sum_max = 0;
  let sum_min = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    max += cur;
    sum_max = Math.max();
    sum_min += cur;
  }
  return Math.max(Math.abs(max), Math.abs(min));
}
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]));
