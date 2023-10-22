function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);
  let res = 0;
  let sum = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    const cur = satisfaction[i];
    const nextRes = res + sum + cur;
    sum += cur;
    if (nextRes > res) {
      res = nextRes;
    } else {
      break;
    }
  }
  return res;
}
maxSatisfaction([-1, -8, 0, 5, -7]);
