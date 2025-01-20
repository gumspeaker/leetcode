function countTexts(pressedKeys: string): number {
  const m = 1000000007;
  const group3: number[] = [1, 1, 2, 4];
  const group4: number[] = [1, 1, 2, 4];
  for (let i = 4; i <= pressedKeys.length; i++) {
    group3.push((group3[i - 1] + group3[i - 2] + group3[i - 3]) % m);
    group4.push(
      (group4[i - 1] + group4[i - 2] + group4[i - 3] + group4[i - 4]) % m
    );
  }
  function add(cur: string, length: number) {
    if (cur === "7" || cur === "9") {
      res = (res * BigInt(group4[length])) % BigInt(m);
    } else {
      res = (res * BigInt(group3[length])) % BigInt(m);
    }
  }
  let res = BigInt(1);
  let currentLength = 1;
  for (let index = 1; index < pressedKeys.length; index++) {
    const cur = pressedKeys[index];
    const prev = pressedKeys[index - 1];
    if (cur !== prev) {
      add(prev, currentLength);
      currentLength = 1;
    } else {
      currentLength++;
    }
  }
  add(pressedKeys[pressedKeys.length - 1], currentLength);
  return Number(res);
}
console.log(countTexts("22233"));
