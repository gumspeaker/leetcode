function restoreIpAddresses(s: string): string[] {
  let res: string[] = [];
  function loop(curItems: string[], point: number) {
    // 大于四剪枝
    if (curItems.length > 4) {
      return;
    }
    if (point === s.length) {
      if (curItems.length === 4) {
        res.push(curItems.join("."));
      }
      return;
    }
    for (let i = 0; i <= 2; i++) {
      if (point + i <= s.length) {
        const cur = s.slice(point, point + i + 1);
        if ((cur.startsWith("0") && cur.length > 1) || Number(cur) > 255) {
          continue;
        }
        loop([...curItems, cur], point + i + 1);
      }
    }
  }
  loop([], 0);

  return res;
}
restoreIpAddresses("25525511135");
