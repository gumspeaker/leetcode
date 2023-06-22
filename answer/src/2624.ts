declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }
  let index = 0;
  let res = new Array(rowsCount)
    .fill(0)
    .map(() => new Array(colsCount).fill(0));
  const loop = (x: number, flag: boolean) => {
    if (flag) {
      for (let i = 0; i < rowsCount; i++) {
        res[i][x] = this[index];
        index++;
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; i--) {
        res[i][x] = this[index];
        index++;
      }
    }
  };
  let x = 0;
  let flag = true;
  while (index < this.length) {
    loop(x, flag);
    x++;
    flag = !flag;
  }

  return res;
};
let nums = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
let rowsCount = 5;
let colsCount = 4;
nums.snail(rowsCount, colsCount);
export {};
