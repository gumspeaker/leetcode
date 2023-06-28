function maxValue(grid: number[][]): number {
  let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      if (i == 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j == 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // console.log(dp);

  // console.log(dp[grid.length - 1][grid[0].length - 1]);

  return dp[grid.length - 1][grid[0].length - 1];
}
maxValue([
  [1, 2, 3],
  [4, 5, 6],
]);
[
  [1, 3, 6],
  [5, 10, 14],
];
