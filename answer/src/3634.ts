function minRemoval(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let lef = 0;
  let right = nums.length - 1;
  while (lef < right) {
    if (nums[right] / nums[lef] <= k) {
      return nums.length - (right - lef + 1);
    } else {
      if (nums[right] / nums[lef + 1] > nums[right - 1] / nums[lef]) {
        lef++;
      } else {
        right--;
      }
    }
  }
  return nums.length - 1;
}
