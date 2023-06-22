function chunk(arr: any[], size: number): any[][] {
  let res: any[][] = [];
  let i = 0;
  while (i * size < arr.length) {
    res[i] = arr.slice(i * size, (i + 1) * size);
    i++;
  }
  return res;
}
console.log(chunk([1, 9, 6, 3, 2], 3));
