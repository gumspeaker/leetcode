function continuousSubarrays(nums: number[]): number {
  let ans = 0;
  let l = 0;
  let r = 0;
  while (r <= nums.length - 1) {
    if (Math.abs(nums[r] - nums[r + 1]) <= 2) {
      r++;
    } else {
      let num = r - l + 1;
      let _ans = 0;
      for (let i = 0; i < num; i++) {}
      ans++;
    }
  }
  return ans;
}
continuousSubarrays([5, 4, 2, 4]);
