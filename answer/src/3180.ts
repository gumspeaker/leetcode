function maxTotalReward(_rewardValues: number[]): number {
  const rewardValues = Array.from(new Set(_rewardValues)).sort((a, b) => a - b);
  let total = 0;
  let max = rewardValues[rewardValues.length - 1];
  function loop(start: number, _total: number) {
    total = Math.max(total, _total);
    if (_total >= max) {
      return;
    }
    if (_total === max - 1 && start <= rewardValues.length - 1) {
      total = total + max;
      return;
    }
    for (let index = start; index < rewardValues.length; index++) {
      const cur = rewardValues[index];
      if (_total >= cur) {
        continue;
      }
      const afterTotal = _total + cur;
      loop(index + 1, afterTotal);
    }
  }
  loop(0, 0);
  return total;
}
let rewardValues = [17, 18, 18];
const file = (document.getElementById("fileInput") as HTMLInputElement)!
  .files?.[0]!;

console.log(maxTotalReward(rewardValues));
