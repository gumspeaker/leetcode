function flipChess(chessboard: string[]): number {
  // const changeMap = {};
  for (let y = 0; y < chessboard.length; y++) {
    for (let x = 0; x < chessboard[0].length; x++) {
      let cur = chessboard[y][x];
      if (cur !== ".") {
        continue;
      }
      dfs(y, x);
    }
  }
  function dfs(y: number, x: number) {
    left(y, x);
  }
}
function getKey(x: string, y: string) {
  return `${x},${y}`;
}
