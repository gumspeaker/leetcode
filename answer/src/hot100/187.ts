function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  const deleted = nums.splice(nums.length - k);
  nums.unshift(...deleted);
  console.log(nums);
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);
