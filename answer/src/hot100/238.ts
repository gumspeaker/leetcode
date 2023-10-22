function productExceptSelf(nums: number[]): number[] {
  let lMax = [nums[0]];
  let rMax = [nums[nums.length - 1]];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    lMax[i] = lMax[i - 1] * element;
  }
  console.log(lMax);

  for (let i = nums.length - 2; i >= 0; i--) {
    const element = rMax[0] * nums[i];
    rMax.unshift(element);
  }
  console.log(rMax);

  return nums.map((_, index) => {
    return (lMax[index - 1] ?? 1) * (rMax[index + 1] ?? 1);
  });
}
console.log(productExceptSelf([1, 2, 3, 4]));
