function sumOfMultiples(n: number): number {
  let res = new Set<number>();

  function test(base: number) {
    let i = 0;
    while (i * base <= n) {
      res.add(i * base);
      i += 1;
    }
  }
  test(3);
  test(5);
  test(7);
  let ans = 0;
  res.forEach((v) => {
    ans += v;
  });
  return ans;
}
