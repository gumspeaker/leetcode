function closedIsland(grid: number[][]): number {
  let res = 0;
  const hasLoopedSet = new Set();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let item = grid[y][x];
      if (item === 1) {
        continue;
      }
      if (hasLoopedSet.has(getKey(y, x))) {
        continue;
      }

      res++;
      let opened = loop(y, x);
      if (opened) {
        res--;
      }
    }
  }
  function loop(y: number, x: number) {
    if (hasLoopedSet.has(getKey(y, x))) {
      return false;
    }

    hasLoopedSet.add(getKey(y, x));
    if (
      y === 0 ||
      x === 0 ||
      x === grid[0].length - 1 ||
      y === grid.length - 1
    ) {
      [
        [y, x + 1],
        [y + 1, x],
        [y - 1, x],
        [y, x - 1],
      ].forEach(([nextY, nextX]) => {
        if (
          nextY > grid.length - 1 ||
          nextY < 0 ||
          nextX < 0 ||
          nextX > grid[0].length - 1
        ) {
          return;
        }

        if (grid[nextY][nextX] === 0) {
          loop(nextY, nextX);
        }
      });
      return true;
    }
    let opened = false;
    [
      [y, x + 1],
      [y + 1, x],
      [y - 1, x],
      [y, x - 1],
    ].forEach(([nextY, nextX]) => {
      if (grid[nextY][nextX] === 0) {
        const res = loop(nextY, nextX);
        opened = opened || res;
      }
    });
    return opened;
  }
  return res;
}
function getKey(y: number, x: number) {
  return `${y},${x}`;
}
let grid = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
];
console.log(closedIsland(grid));
