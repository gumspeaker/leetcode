export default `function findValueOfPartition(nums: number[]): number {
  nums.sort((n1, n2) => n1 - n2);
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    const delta = nums[i] - nums[i - 1];
    if (delta < res) {
      res = delta;
    }
  }
  return res;
}
let nums = [100, 1, 10];
console.log(findValueOfPartition(nums));
`