function groupAnagrams(strs: string[]): string[][] {
  let res = [];
  let sorted = strs.map((str) => {
    return Array.from(str).sort().join("");
  });
  let map: any = {};
  sorted.forEach((s, i) => {
    if (map[s]) {
      map[s].push(strs[i]);
    } else {
      map[s] = [strs[i]];
    }
  });
  return Object.values(map);
}
