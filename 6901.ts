function distanceTraveled(mainTank: number, additionalTank: number): number {
  let res = 0;
  function loop(mainTank: number, additionalTank: number) {
    let cost = mainTank - (mainTank % 5);
    let anther =
      mainTank >= 5 * additionalTank
        ? additionalTank
        : Math.floor(mainTank / 5);
    // console.log(cost, anther, res);

    if (anther === 0) {
      res += mainTank;
      return;
    } else {
      res += cost;

      loop(mainTank - cost + anther, additionalTank - anther);
    }
  }
  loop(mainTank, additionalTank);
  return res * 10;
}

console.log(distanceTraveled(9, 2));
