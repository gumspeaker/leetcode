export function minimumDeletions(s: string): number {
  let res = Number.MAX_SAFE_INTEGER;
  let aCount = 0;
  let bCount = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "a") {
      aCount++;
    } else {
      // bCount++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    if (cur === "b") {
      // console.log(i, aCount, bCount);

      res = Math.min(res, aCount + bCount);
      bCount++;
    } else {
      aCount--;
    }
  }
  if (res === Number.MAX_SAFE_INTEGER) {
    return 0;
  }
  return Math.min(res, bCount);
}
