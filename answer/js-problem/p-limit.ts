// const pl = require("p-limit");
type AsyncFunction<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>;
const curTime = new Date().valueOf();
const limit = (limitNumber: number) => {
  const queue: AsyncFunction<any, any>[] = [];
  let actionCount = 0;
  return <D, P extends any[]>(fn: AsyncFunction<D, P>, ...arg: P) => {
    const runner = async () => {
      actionCount++;
      fn(...arg).finally(next);
    };
    const next = () => {
      actionCount--;
      if (queue.length) {
        const nextRunner = queue.shift();
        nextRunner!();
      }
    };
    if (actionCount >= limitNumber) {
      queue.push(runner as any);
    } else {
      runner();
    }
  };
};

const sleep = (time: number, index: number) =>
  new Promise<number>((res) => {
    console.log("start", index);
    setTimeout(() => {
      res(index);
      console.log("end", index);
    }, time);
  });
const p = limit(2);
// p(async () => await sleep(1000, 1));
// p(async () => await sleep(2000, 2));
// p(async () => await sleep(3000, 3));
// p(async () => await sleep(4000, 4));
//0 1 2 3 4 5 6
//  1 3 3 3
//  2 2 4 4 4 4
const limitP = (time: number) => {
  let current = 0;
  let list: any[] = [];
  return <D, P extends any[]>(task: AsyncFunction<D, P>, ...param: P) => {
    const runner = async () => {
      current++;
      task(...param).finally(() => {
        current--;
        if (list.length > 0) {
          const nextRunner = list.shift();
          nextRunner?.();
        }
      });
    };
    if (current >= time) {
      list.push(runner);
    } else {
      runner();
    }
  };
};
const exec = limitP(2);
exec(async () => await sleep(7000, 1));
exec(async () => await sleep(2000, 2));
exec(async () => await sleep(3000, 3));
exec(async () => await sleep(4000, 4));
