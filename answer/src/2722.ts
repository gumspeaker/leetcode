function join(arr1: any[], arr2: any[]): any[] {
  let res: any = {};
  arr1.forEach((item) => {
    res[item.id] = item;
  });
  arr2.forEach((item) => {
    if (res[item.id]) {
      Object.assign(res[item.id], item);
    } else {
      res[item.id] = item;
    }
  });
  return Object.values(res).sort((a: any, b: any) => a.id - b.id);
}
let arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
let arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));
