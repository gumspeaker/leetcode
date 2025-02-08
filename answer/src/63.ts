function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let maxX = obstacleGrid[0].length - 1,
    maxY = obstacleGrid.length - 1,
    res = 0;
  function dfs(x: number, y: number): number {
    if (x > maxX || y > maxY || obstacleGrid?.[y]?.[x] === 1) {
      return 0;
    }
    if (x === maxX && y === maxY) {
      return 1;
    }
    return cached(x + 1, y) + cached(x, y + 1);
  }
  const [map, cached] = cacheFn(dfs);
  let d = cached(0, 0);
  // console.log(map);
  return d;
}
function cacheFn(fn: any) {
  let map = new Map();
  return [
    map,
    function (...arg: any) {
      const key = arg.join(",");
      if (map.get(key) !== undefined) {
        return map.get(key);
      } else {
        const res = fn(...arg);
        map.set(key, res);
        return res;
      }
    },
  ] as const;
}
uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
