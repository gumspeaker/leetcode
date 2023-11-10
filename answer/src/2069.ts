function findTheLongestBalancedSubstring(s: string): number {
  let i = 0;
  let n = s.length - 1;
  let max = 0;
  let cur0 = 0;
  let cur1 = 0;
  function end() {
    console.log(cur0, cur1);
    max = Math.max(max, Math.min(cur0, cur1) + cur1);
    cur0 = 0;
    cur1 = 0;
  }
  while (i <= n) {
    if (s[i] === "0") {
      if (s[i - 1] === "1") {
        end();
      }
      cur0++;
    } else {
      if (cur1 >= cur0) {
        end();
      } else {
        cur1++;
      }
    }
    i++;
  }
  end();
  return max;
}
console.log(findTheLongestBalancedSubstring("01000111"));
