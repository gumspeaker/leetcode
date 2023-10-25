function countDigits(num: number): number {
  const l = num.toString().length;
  return Array.from(num.toString()).reduce((sum, cur) => {
    return Number(cur) % l === 0 ? sum + 1 : sum;
  }, 0);
}
console.log(countDigits(7));
