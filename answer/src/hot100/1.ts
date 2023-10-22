function twoSum(nums: number[], target: number): number[] {
  let cache: any = {};
  for (let i = 0; i < nums.length; i++) {
    // console.log(cache,target-nums[i])
    if (cache[target - nums[i]] !== undefined) {
      return [cache[target - nums[i]], i];
    } else {
      cache[nums[i]] = i;
    }
  }
  return [];
}
