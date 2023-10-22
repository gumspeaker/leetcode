function minGroupsForValidAssignment(nums: number[]): number {
  let map: any = {};
  for (const n of nums) {
    map[n] = (map[n] ?? 0) + 1;
  }
  let values = (Object.values(map) as any).sort(
    (a: number, b: number) => a - b
  );
  let avg = Math.ceil(nums.length / Object.values(map).length);
  let i = 0;
  let x = 0;
  while (i < nums.length) {
    // 1005 1001  1010 1015
    // n*len ~ n*(len+1)
  }
}
