function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1;
  let max = 0;
  while (i < j) {
    console.log(Math.min(height[i], height[j]) * (j - i), j, i);

    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
}
maxArea([2, 3, 4, 5, 18, 17, 6]);
