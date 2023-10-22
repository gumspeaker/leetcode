/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length && i < lastIndex; i++) {
    const element = nums[i];
    if (element === 0) {
      const y = nums.splice(i, 1);
      nums.push(...y);
      i--;
      lastIndex--;
    }
  }
  console.log(nums);

  function swap(a: number, b: number) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
}
moveZeroes([0, 1, 0]);
