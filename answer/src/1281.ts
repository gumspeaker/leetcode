function subtractProductAndSum(n: number): number {
  return Array.from(n.toString())
    .reduce((res, i) => [res[0] + Number(i), res[1] * Number(i)], [0, 1])
    .reduce((a, b, c, d) => d[0] - d[1], 0);
}
