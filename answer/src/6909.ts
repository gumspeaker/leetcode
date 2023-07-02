function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let l = 0;
  let ans = 0;

  while (l <= nums.length - 1) {
    if (
      !(
        nums[l] % 2 === 0 &&
        nums[l] % 2 != nums[l + 1] % 2 &&
        nums[l] <= threshold
      )
    ) {
      l++;
      continue;
    }
    let r = l + 1;
    while (r <= nums.length - 1) {
      if (nums[r] % 2 != nums[r + 1] % 2 && nums[r] <= threshold) {
        r++;
      } else {
        break;
      }
    }
    console.log(l, r);

    ans = Math.max(ans, r - l);
    l = r;
  }
  return ans;
}
let nums = [2, 8],
  threshold = 4;
console.log(longestAlternatingSubarray(nums, threshold));

export {};
