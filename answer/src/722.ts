function removeComments(source: string[]): string[] {
  let isInComment = false;
  let ans: string[] = [];
  let cache = "";
  source.forEach((s) => {
    let thisLine = "";
    if (cache) {
      thisLine = cache;
      cache = "";
    }
    for (let i = 0; i < s.length; i++) {
      console.log(s[i], i);

      if (s[i] === "/") {
        if (s[i + 1] === "/" && !isInComment) {
          break;
        }
        if (isInComment && s[i - 1] === "*" && s[i - 2] !== "/") {
          isInComment = false;
          continue;
        }
        if ( s[i + 1] === "*") {
          i = i + 1;
          isInComment = true;
          continue;
        }
      }
      if (!isInComment) {
        thisLine += s[i];
      }
    }
    if (thisLine.length) {
      if (isInComment) {
        cache = thisLine;
      } else {
        ans.push(thisLine);
      }
    }
  });
  return ans;
}
console.log(removeComments(["d/*/e/*/f"]));
d/*/e/*/f
