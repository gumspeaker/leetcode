function* fibGenerator(): Generator<number, any, number> {
  let prePre: number | null = null;
  let pre: number | null = null;
  while (true) {
    if (prePre === null) {
      prePre = 0;
      yield prePre;
    }
    if (pre === null) {
      pre = 1;
      yield pre;
    }
    const sum: number = prePre! + pre!;
    prePre = pre;
    pre = sum;
    yield pre;
  }
}
