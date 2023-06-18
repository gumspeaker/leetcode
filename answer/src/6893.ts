function specialPerm(nums: number[]): number {
  let res = 0;
  function loop(last: number | undefined, thisTime: number[]) {
    if (thisTime.length === 0) {
      res++;
      if (res === 10 ** 9 + 7) {
        res = 0;
      }
      return;
    }
    thisTime.forEach((num, i) => {
      if (last == undefined || last % num == 0 || num % last === 0) {
        let pop = thisTime.splice(i, 1);
        loop(num, thisTime);
        thisTime.splice(i, 0, pop[0]);
      }
    });
  }

  loop(undefined, nums);
  return res;
}
const nums = [1, 4, 3];

console.log(specialPerm(nums));
