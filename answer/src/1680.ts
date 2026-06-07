function main() {
  let info = "";
  let v: number[] = [];
  for (let i = 1; i <= 100000; i++) {
    const cur = i.toString(2);
    info = info + cur;
    const res = parseInt(info, 2) % (10e9 + 7);
    v[i] = res;
  }
  console.log(v);
}
main();
