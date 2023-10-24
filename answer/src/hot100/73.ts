/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let s1 = new Set();
  let s2 = new Set();
  matrix.forEach((r, ri) => {
    r.forEach((c, ci) => {
      if (c === 0) {
        s1.add(ri);
        s2.add(ci);
      }
    });
  });
  matrix.forEach((r, ri) => {
    r.forEach((c, ci) => {
      if (s2.has(ci) || s1.has(ri)) {
        matrix[ri][ci] = 0;
      }
    });
  });
}
