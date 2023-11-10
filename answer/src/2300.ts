function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b);
  let res: number[] = [];
  let indexes = new Array(spells.length).fill(0).map((_, i) => i);
  indexes.sort((a, b) => spells[a] - spells[b]);

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    let lastSuccess = indexes[i - 1] ? res[indexes[i - 1]] : 0;
    const cur = spells[index];
    const successNums = pick(cur, lastSuccess);
    console.log(lastSuccess, successNums);
    res[index] = successNums + lastSuccess;
  }
  function pick(cur: number, lastSuccess: number): number {
    let i = 0;
    while (i < potions.length - lastSuccess) {
      const element = potions[i];
      if (cur * element >= success) {
        break;
      }
      i++;
    }
    return i;
  }
  console.log(res);

  return res;
}
successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7);
