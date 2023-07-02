function reconstructMatrix(
  upper: number,
  lower: number,
  colSum: number[]
): number[][] {
  const n = colSum.length;
  let ans = new Array(2).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < colSum.length; i++) {
    const item = colSum[i];
    if (item === 0) {
      continue;
    }
    if (item === 2) {
      upper--;
      lower--;
      ans[0][i] = 1;
      ans[1][i] = 1;
    }
    if (item === 1) {
      if (upper > lower) {
        upper--;
        ans[0][i] = 1;
      } else {
        lower--;
        ans[1][i] = 1;
      }
    }
    if (upper < 0 || lower < 0) {
      return [];
    }
  }
  if (upper !== 0 || lower !== 0) {
    return [];
  }

  return ans;
}
let upper = 4,
  lower = 7,
  colsum = [2, 1, 2, 2, 1, 1, 1];
reconstructMatrix(upper, lower, colsum);
