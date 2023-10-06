function maxProfit(prices: number[]): number {
  // let sortedIndex = new Array(prices.length).fill(0).map((_, i) => i);
  // sortedIndex.sort((a, b) => {
  //   return prices[a] - prices[b];
  // });
  // let l = 0,
  //   r = sortedIndex.length - 1;
  // let money = 0;
  // while (l < r) {
  //   if (sortedIndex[l] > sortedIndex[r]) {
  //     money = prices[sortedIndex[l] - sortedIndex[r]];
  //   } else {
  //     l++;
  //   }
  // }
  // return money;
  let min = prices[0];
  let money = 0;

  prices.forEach((p) => {
    if (min > p) {
      min = p;
    }
    // console.log(min,p,p-min)
    money = Math.max(p - min, money);
  });
  return money;
}
export default maxProfit;
