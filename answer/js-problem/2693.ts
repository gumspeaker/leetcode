type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

declare global {
  interface Function {
    callPolyfill(
      context: Record<string, JSONValue>,
      ...args: JSONValue[]
    ): JSONValue;
  }
}

Function.prototype.callPolyfill = function (context, ...args): JSONValue {
  // return this.apply(context, args);
  (context as any).fn = this;
  const res = (context as any).fn(...args);
  delete context.fn;
  return res;
};
const fn = function add(b: number) {
    //@ts-ignore
    return this.a + b;
  },
  args = [{ a: 5 }, 7] as const;
console.log(fn.callPolyfill(...args));
export {};
