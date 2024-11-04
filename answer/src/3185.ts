function countCompleteDayPairs(hours: number[]): number {
  let after = hours.map((v) => {
    return v % 24;
  });
  let map: any = {};
  let total = 0;
  for (let index = 0; index < hours.length; index++) {
    const cur = after[index];
    const another = (24 - cur) % 24;
    if (map[another]) {
      total += map[another];
    }
    map[cur] = (map[cur] || 0) + 1;
  }
  console.log(map, total);

  return total;
}
countCompleteDayPairs([12, 12, 30, 24, 24]);
