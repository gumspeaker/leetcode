function findKOr(nums: number[], k: number): number {
  let res: number[] = [];
  nums.forEach((n) => {
    const binary = n.toString(2);

    for (let i = binary.length - 1; i >= 0; i--) {
      const element = binary[i];
      const wei = binary.length - 1 - i;
      if (element === "1") {
        res[wei] = (res[wei] ?? 0) + 1;
      }
    }
  });
  console.log(res);

  let ans = 0;
  res.forEach((cur, indx) => {
    if (cur >= k) {
      ans += 2 ** indx;
    }
  });
  return ans;
}

console.log(findKOr([7, 12, 9, 8, 9, 15], 4));
