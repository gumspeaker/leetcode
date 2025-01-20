function countTexts(pressedKeys: string): number {
  const m = 1000000007;
  const n = pressedKeys.length;
  const dp3: number[] = [1, 1, 2, 4]; // 连续按多次 3 个字母按键对应的方案数
  const dp4: number[] = [1, 1, 2, 4]; // 连续按多次 4 个字母按键对应的方案数
  for (let i = 4; i <= n; i++) {
    dp3.push((dp3[i - 1] + dp3[i - 2] + dp3[i - 3]) % m);
    dp4.push((dp4[i - 1] + dp4[i - 2] + dp4[i - 3] + dp4[i - 4]) % m);
  }
  let res = BigInt(1); // 总方案数
  let cnt = 1; // 当前字符连续出现的次数
  for (let i = 1; i < n; i++) {
    if (pressedKeys[i] === pressedKeys[i - 1]) {
      cnt++;
    } else {
      // 对按键对应字符数量讨论并更新总方案数
      if (pressedKeys[i - 1] === "7" || pressedKeys[i - 1] === "9") {
        res = (res * BigInt(dp4[cnt])) % BigInt(m);
      } else {
        res = (res * BigInt(dp3[cnt])) % BigInt(m);
      }
      cnt = 1;
    }
  }
  // 更新最后一段连续字符子串对应的方案数
  if (pressedKeys[n - 1] === "7" || pressedKeys[n - 1] === "9") {
    res = (res * BigInt(dp4[cnt])) % BigInt(m);
  } else {
    res = (res * BigInt(dp3[cnt])) % BigInt(m);
  }
  return Number(res);
}
