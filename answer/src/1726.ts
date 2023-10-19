function tupleSameProduct(nums: number[]): number {
  let map: Record<string, number> = {};
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = index + 1; index2 < nums.length; index2++) {
      let result = nums[index] * nums[index2];
      console.log(result);

      map[result] = (map[result] ?? 0) + 1;
    }
  }
  console.log(map);

  return (
    Object.values(map).reduce((sum, same_value_number) => {
      return sum + (same_value_number * (same_value_number - 1)) / 2;
    }, 0) * 8
  );
}
tupleSameProduct([2, 3, 4, 6]);
