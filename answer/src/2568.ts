function vowelStrings(words: string[], left: number, right: number): number {
  let res = 0;
  for (let i = left; i <= right; i++) {
    const element = words[i];
    if (
      (element[0] === "a" ||
        element[0] === "e" ||
        element[0] === "i" ||
        element[0] === "o" ||
        element[0] === "u") &&
      (element[element.length - 1] === "a" ||
        element[element.length - 1] === "e" ||
        element[element.length - 1] === "i" ||
        element[element.length - 1] === "o" ||
        element[element.length - 1] === "u")
    ) {
      res++;
    }
  }
  return res;
}
