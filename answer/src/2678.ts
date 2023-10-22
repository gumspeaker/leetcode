function countSeniors(details: string[]): number {
  return details.reduce((sum, i) => {
    return Number(i.slice(11, 13)) > 60 ? sum + 1 : sum;
  }, 0);
}
countSeniors(["7868190130M7522"]);
