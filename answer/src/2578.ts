function splitNum(num: number): number {
  const items = Array.from(num.toString())
    .sort((a, b) => Number(b) - Number(a))
    .reduce(
      ([flag, a, b], current) => {
        return flag ? [false, current + a, b] : [true, a, current + b];
      },
      [false, "", ""] as any[]
    )
    .reduce((_, _1, _2, arr) => Number(arr[1]) + Number(arr[2]), 0);
  console.log(items);

  return 0;
}
splitNum(4325);
