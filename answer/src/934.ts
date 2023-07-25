function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[0] = [...matrix[0]];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == 0) {
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
        continue;
      }
      if (j == n - 1) {
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
        continue;
      }
      dp[i][j] =
        matrix[i][j] +
        Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]);
    }
  }
  // console.log(dp);

  return dp[n - 1].reduce(
    (min, index) => Math.min(min, index),
    Number.MAX_SAFE_INTEGER
  );
}
let matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
console.log(minFallingPathSum(matrix));
