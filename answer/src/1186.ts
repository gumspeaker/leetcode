function maximumSum(arr: number[]): number {
  let dp: number[] = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let sum = arr[i];
    let min = arr[i];
    let target = arr[i];

    while (j >= 0) {
      sum += arr[j];
      min = Math.min(min, arr[j]);
      target = Math.max(target, sum, sum - min);
      j--;
    }
    dp[i] = target;
  }

  return dp.reduce((s, i) => Math.max(s, i), Number.MIN_SAFE_INTEGER);
}
console.log(maximumSum([-1, -1, -1, -1]));
