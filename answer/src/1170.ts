function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  let translateWord = words.map((i) => translate(i));
  translateWord.sort((a, b) => a - b);
  let searMap: Record<string, number> = {};
  let wl = words.length;
  for (let i = 0; i < translateWord.length; i++) {
    searMap[translateWord[i].toString()] = wl - i - 1;
  }
  console.log(searMap, translateWord);

  return queries.map((i) => {
    let translatedItem = translate(i);

    while (translatedItem > 0) {
      if (searMap[translatedItem]) {
        return searMap[translatedItem];
      }
      translatedItem--;
    }
    return 1;
  });
}
function translate(s: string) {
  if (!s.length) {
    return 0;
  }
  let minChar = s[0];
  let minCharNumber = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] < minChar) {
      minChar = s[i];
      minCharNumber = 1;
      continue;
    }
    if (s[i] === minChar) {
      minCharNumber++;
    }
  }
  return minCharNumber;
}
