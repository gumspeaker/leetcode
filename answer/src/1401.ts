function checkOverlap(
  radius: number,
  xCenter: number,
  yCenter: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean {
  function getDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
  }

  const points = [
    [x1, y1],
    [x2, y2],
    [x1, y2],
    [x2, y1],
  ];
  let flag = false;
  for (const [x1, y1] of points) {
    if (getDistance(x1, y1, xCenter, yCenter) < radius) {
      flag = true;
      break;
    }
  }
  if (flag) {
    return true;
  }
  if (y1 <= yCenter && y2 >= yCenter && x1 <= xCenter && x2 >= xCenter)
    return true;
  if (y1 <= yCenter && y2 >= yCenter)
    return Math.abs(x1 - xCenter) <= radius || Math.abs(x2 - xCenter) <= radius;
  if (x1 <= xCenter && x2 >= xCenter)
    return Math.abs(y1 - yCenter) <= radius || Math.abs(y2 - yCenter) <= radius;
  return false;
}
