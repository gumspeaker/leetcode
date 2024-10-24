function spiralOrder(matrix: number[][]): number[] {
  let max = matrix.length * matrix[0].length;
  let map = new Array(matrix.length)
    .fill(0)
    .map((i) => new Array(matrix[0].length).fill(false));

  let res: number[] = [];
  let x = 0;
  let y = 0;

  while (res.length < max) {
    right();
    down();
    left();
    up();
  }
  function loop(nextCallback: () => void) {
    res.push(matrix[y][x]);

    map[y][x] = true;
    nextCallback();
  }
  function right() {
    while (x < matrix[0].length && !map[y][x]) {
      loop(() => (x += 1));
    }
    x--;
    y++;
  }
  function down() {
    while (y < matrix.length && !map[y][x]) {
      loop(() => (y += 1));
    }

    x--;
    y--;
  }
  function left() {
    while (x >= 0 && !map[y][x]) {
      loop(() => (x -= 1));
    }
    x++;
    y--;
  }
  function up() {
    while (y >= 0 && !map[y][x]) {
      loop(() => (y -= 1));
    }
    x++;
    y++;
  }

  return res;
}

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
spiralOrder(matrix1);
