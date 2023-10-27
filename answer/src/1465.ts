export function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  // 水平和竖直位置切割
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxX = 0;
  let maxY = 0;
  for (let i = 0; i <= horizontalCuts.length; i++) {
    let r = horizontalCuts[i] === undefined ? h : horizontalCuts[i];
    let l = horizontalCuts[i - 1] === undefined ? 0 : horizontalCuts[i - 1];
    console.log(r, l);

    maxY = Math.max(maxY, r - l);
  }
  for (let j = 0; j <= verticalCuts.length; j++) {
    let d = verticalCuts[j] === undefined ? w : verticalCuts[j];
    let t = verticalCuts[j - 1] === undefined ? 0 : verticalCuts[j - 1];
    maxX = Math.max(maxX, d - t);
  }

  return ((BigInt(maxY) * BigInt(maxX)) % BigInt(10 ** 9 + 7)) as any;
}
let h = 1000000000,
  w = 1000000000,
  horizontalCuts = [
    35, 5, 21, 12, 4, 7, 18, 32, 36, 40, 10, 30, 24, 17, 8, 20, 9, 3, 34, 41,
    26, 42, 28, 31, 38, 2, 14, 19, 37, 33, 23, 43, 29, 15, 16, 11,
  ],
  verticalCuts = [2];
// let h = 5,
//   w = 4,
//   horizontalCuts = [1, 2, 4],
//   verticalCuts = [1, 3];

console.log(maxArea(h, w, horizontalCuts, verticalCuts));
