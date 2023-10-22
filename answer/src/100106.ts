function minimumSum(nums: number[]): number {
  let minArrStart: number[] = [];
  let minArrEnd: number[] = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (min > element) {
      min = element;
    }
    minArrStart[index] = min;
  }
  min = Number.MAX_SAFE_INTEGER;
  for (let index = nums.length - 1; index >= 0; index--) {
    const element = nums[index];
    if (min > element) {
      min = element;
    }
    minArrEnd[index] = min;
  }
  let sum = Number.MAX_SAFE_INTEGER;
  let finded = false;
  for (let i = 1; i < nums.length - 1; i++) {
    const leftMin = minArrStart[i - 1];
    const rightMin = minArrEnd[i + 1];
    // console.log(leftMin, rightMin, nums[i]);

    if (leftMin < nums[i] && nums[i] > rightMin) {
      const _sum = leftMin + rightMin + nums[i];
      // console.log(leftMin, rightMin, nums[i]);

      finded = true;
      sum = Math.min(sum, _sum);
    }
  }
  // console.log(finded, sum);

  return finded ? sum : -1;
}
// minimumSum([99999999, 100000000, 99999999]);
