function isCircularSentence(sentence: string): boolean {
  let strings = sentence.split(" ");
  for (let index = 0; index < strings.length; index++) {
    if (index === 0) {
      console.log(strings[strings.length - 1], strings[0]);

      if (notSame(strings[strings.length - 1], strings[0])) {
        return false;
      }
      continue;
    }
    console.log(strings[index - 1], strings[index]);

    if (notSame(strings[index - 1], strings[index])) return false;
  }
  return true;
}
function notSame(a: string, b: string) {
  console.log(a[a.length - 1], b[0]);

  return a[a.length - 1] !== b[0];
}
console.log(isCircularSentence("leetcode exercises sound delightful"));
