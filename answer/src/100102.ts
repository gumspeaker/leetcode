function minSum(nums1: number[], nums2: number[]): number {
  function getZeroAndSum(num: number[]) {
    let zero = 0;
    let sum = 0;
    num.forEach((n) => {
      sum += n;
      if (n === 0) {
        zero++;
      }
    });
    return [zero, sum, zero + sum] as const;
  }
  let [zero1, sum1] = getZeroAndSum(nums1);
  let [zero2, sum2] = getZeroAndSum(nums2);

  if (sum1 + zero1 >= sum2 + zero2) {
    [sum1, sum2] = [sum2, sum1];
    [zero1, zero2] = [zero2, zero1];
  }
  if (zero1 == 0 && zero2 == 0) {
    if (sum1 !== sum2) return -1;
    else return sum1;
  }
  if (zero1 === 0) {
    if (sum1 < sum2 + zero2) {
      return -1;
    }
  }

  return sum2 + zero2;
}
let nums1 = [3, 2, 0, 1, 0],
  nums2 = [6, 5];
console.log(minSum(nums1, nums2));
console.log(minSum([2, 0, 0, 2, 0], [1, 4]));
console.log(minSum([2, 2], [2, 2]));
