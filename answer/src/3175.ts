function findWinningPlayer(skills: number[], k: number): number {
  let wins = 0;
  let max = Math.max(...skills);
  let user1 = 0;
  for (let index = 1; index < skills.length; index++) {
    if (wins === k) {
      return user1;
    }
    if (skills[index] === max) {
      return index;
    }

    if (skills[index] > skills[user1]) {
      user1 = index;
      wins = 1;
    } else {
      wins++;
    }
  }
  return 0;
}
let skills = [4, 2, 6, 3, 9],
  k = 2;
console.log(findWinningPlayer(skills, k));
