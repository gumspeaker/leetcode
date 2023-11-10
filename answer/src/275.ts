function hIndex(citations: number[]): number {
  let l = 0;
  let r = citations.length - 1;

  let ans = 0;
  while (l <= r) {
    console.log(l, r);

    const mid = l + Math.floor((r - l) / 2);
    if (citations[mid] >= citations.length - mid) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return citations.length - l;
}
hIndex([100]);
