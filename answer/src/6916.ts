function findPrimePairs(n: number): number[][] {
  let ans: number[][] = [];
  let nums = primeNumber(n);
  console.log(nums);

  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] + nums[r] === n) {
      ans.push([nums[l], nums[r]]);
      l++;
      r--;
    } else if (nums[l] + nums[r] > n) {
      r--;
    } else {
      l++;
    }
  }
  return ans;
}
function primeNumber(n: number) {
  let is_prime = new Array(n).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (is_prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        is_prime[j] = false;
      }
    }
  }
  return is_prime.reduce((sum, boo, i) => {
    if (i === 1) {
      return sum;
    }
    if (boo) {
      sum.push(i);
    }
    return sum;
  }, [] as number[]);
}
console.log(findPrimePairs(2));
