function maximumEvenSplit(finalSum: number): number[] {
  if (finalSum % 2 !== 0) {
    return [];
  }
  let res: number[] = [];
  let i = 1;
  while (finalSum > 0) {
    if (i * 2 <= finalSum) {
      res.push(i * 2);
      finalSum -= i * 2;
      i++;
    } else {
      res[res.length - 1] += finalSum;
      finalSum = 0;
    }
  }
  return res;
}
console.log(maximumEvenSplit(12));
