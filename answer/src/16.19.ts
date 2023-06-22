function pondSizes(land: number[][]): number[] {
  let res: number[] = [];
  let currentSize = 0;

  for (let y = 0; y < land.length; y++) {
    for (let x = 0; x < land[0].length; x++) {
      if (land[y][x] === 0) {
        dfs(y, x);
        res.push(currentSize);
        currentSize = 0;
      }
    }
  }
  function dfs(y: number, x: number) {
    if (
      y < 0 ||
      y > land.length - 1 ||
      x < 0 ||
      x > land[0].length - 1 ||
      land[y][x] !== 0
    ) {
      return;
    }
    land[y][x] = 1;
    currentSize++;
    dfs(y - 1, x - 1);
    dfs(y - 1, x);
    dfs(y - 1, x + 1);
    dfs(y, x - 1);
    dfs(y, x + 1);
    dfs(y + 1, x - 1);
    dfs(y + 1, x);
    dfs(y + 1, x + 1);
  }
  return res.sort((a, b) => a - b);
}
