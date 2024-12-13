/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (
  price: number[],
  special: number[][],
  needs: number[]
) {
  const cache = new Map();

  const dfs = (remain: number[]) => {
    let ans = 0;
    for (let i = 0; i < remain.length; i++) ans += price[i] * remain[i];
    if (ans != 0) {
      const key = remain.join("#");
      if (cache.has(key)) ans = cache.get(key);
      else {
        for (const sp of special) {
          let check = true;
          for (let i = 0; i < remain.length; i++)
            if (sp[i] > remain[i]) {
              check = false;
              break;
            }
          if (check) {
            const next = [];
            for (let i = 0; i < remain.length; i++)
              next.push(remain[i] - sp[i]);
            ans = Math.min(ans, dfs(next) + sp[sp.length - 1]);
          }
        }
        cache.set(key, ans);
      }
    }
    return ans;
  };

  return dfs(needs);
};
var price = [4, 3, 2, 9, 8, 8],
  special = [
    [1, 5, 5, 1, 4, 0, 18],
    [3, 3, 6, 6, 4, 2, 32],
  ],
  needs = [6, 5, 5, 6, 4, 1];
console.log(shoppingOffers(price, special, needs));
