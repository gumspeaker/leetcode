function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const searchMap: any = [];
  const search: any = {};
  Array.from(s).forEach((w, i) => {
    search[w] = (search[w] ?? 0) + 1;
    searchMap[i] = { ...search };
  });
  console.log(searchMap);

  return queries.map(([l, r, change]) => {
    let odds = 0;
    //  const deltas =
    Object.entries(searchMap[r]).forEach(([k, v]: any) => {
      const before = l === 0 ? 0 : searchMap[l - 1][k] ?? 0;
      const delta = v - before;

      if (delta % 2 !== 0) {
        odds++;
      }
      return delta % 2 == 0;
    });
    // console.log(Math.ceil(odds));
    // const stringCount = r - l;
    // if(stringCount%2==0){
    //   return
    // }
    // console.log(odds);
    // console.log(change, Math.floor(odds / 2));
    // console.log("===");

    return change >= Math.floor(odds / 2);
  });
}
let s = "abcda",
  queries = [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ];
console.log(canMakePaliQueries(s, queries));
