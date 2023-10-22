function trap(height: number[]): number {
  let lMax = [];
  let rMax = [];
  let lm = Number.MIN_SAFE_INTEGER;
  let rm = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < height.length; i++) {
    const element = height[i];
    lm = Math.max(lm, element);
    lMax[i] = lm;
  }
  for (let i = height.length - 1; i >= 0; i--) {
    const element = height[i];
    rm = Math.max(rm, element);
    rMax[i] = rm;
  }
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    const cur = height[i];
    let t = Math.min(lMax[i], rMax[i]);
    sum += t - cur;
  }
  return sum;
}
