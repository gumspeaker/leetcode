const x = ["Neither", "Bulky", "Heavy", "Both"];
function categorizeBox(
  length: number,
  width: number,
  height: number,
  mass: number
): string {
  const isB: any =
    (length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4) &&
    width * height * length >= 10 ** 9;
  const isH: any = mass >= 100;
  return x[(isH << 2) + isB];
}
