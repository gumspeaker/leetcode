async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  let ans: T[] = [];
  let nums = 0;
  return new Promise<T[]>((res, rej) => {
    functions.forEach((fn, index) => {
      fn()
        .then((v) => {
          ans[index] = v;
          nums++;
          if (nums == functions.length) {
            res(ans);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}
let functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
];
promiseAll(functions).then(console.log);
