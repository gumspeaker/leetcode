function numSpecial(mat: number[][]): number {
  let row = new Array(mat.length).fill(0);
  let col = new Array(mat[0].length).fill(0);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        row[i]++;
        col[j]++;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
        res++;
      }
    }
  }
  return res;
}

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
];
[
  [1, 2, 1, 2, 2],
  [1, 0, 1, 1, 3, 1, 0, 1],
];
