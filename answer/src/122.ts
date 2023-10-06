function maxProfit(prices: number[]): number {
  let money = 0;
  for (let index = 0; index <= prices.length - 1; index++) {
    const p = prices[index];
    const nextP = prices[index + 1];
    if (nextP - p > 0) {
      money += nextP - p;
    }
  }

  console.log(money);
  return money;
}
maxProfit([7, 1, 5, 3, 6, 4]);
