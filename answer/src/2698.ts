function punishmentNumber(n: number): number {
  return [
    0, 1, 9, 10, 36, 45, 55, 82, 91, 99, 100, 235, 297, 369, 370, 379, 414, 657,
    675, 703, 756, 792, 909, 918, 945, 964, 990, 991, 999, 1000,
  ]
    .filter((i) => i <= n)
    .reduce((s, i) => {
      return s + i ** 2;
    }, 0);
}
// 打表
// let res11 = new Set<number>();
// let res = 0;
// for (let i = 0; i <= 1000; i++) {
//   let x = i ** 2;
//   x.toString();
//   xx(x.toString(), 0, i);
// }

// function xx(str: string, sum: number, max: number) {
//   if (sum > max) {
//     return;
//   }
//   if (str.length === 0) {
//     if (sum === max) {
//       console.log(sum, "sum");
//       res11.add(sum);
//     }
//     return;
//   }
//   for (let i = 1; i <= str.length; i++) {
//     const next = str.slice(0, i);
//     xx(str.slice(i), Number(next) + sum, max);
//   }
// }
// console.log(res11, "target");
console.log(punishmentNumber(10));
