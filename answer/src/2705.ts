type Obj = Record<any, any>;
function isObjOrArr(obj: Obj) {
  return Array.isArray(obj) || typeof obj === "object";
}
function compactObject(obj: Obj): Obj {
  function dfs(obj: Obj): any {
    if (Array.isArray(obj)) {
      return obj
        .filter((i) => Boolean(i))
        .map((item) => (isObjOrArr(item) ? dfs(item) : item));
    } else if (typeof obj === "object") {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (!Boolean(obj[key])) {
            delete obj[key];
            continue;
          }
          if (isObjOrArr(obj)) {
            obj[key] = dfs(obj[key]);
          }
        }
      }
      return obj;
    }
    return obj;
  }

  return dfs(obj);
}
console.log(compactObject({ a: null, b: [false, 1] }));
