class StockSpanner {
  // spanner: number = 0;
  stack: number[][] = [];
  idx = -1;
  constructor() {
    this.stack.push([-1, Number.MAX_VALUE]);
  }

  next(price: number): number {
    this.idx++;
    while (price >= this.stack[this.stack.length - 1][1]) {
      this.stack.pop();
    }
    let ret = this.idx - this.stack[this.stack.length - 1][0];
    this.stack.push([this.idx, price]);
    return ret;
  }
}
