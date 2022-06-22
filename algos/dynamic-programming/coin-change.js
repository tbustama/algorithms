var coinChange = function (coins, amount) {
  let res = new Array(amount + 1).fill(Infinity);
  res[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (coin of coins) {
      if (i - coin >= 0) {
        res[i] = Math.min(res[i], 1 + res[i - coin]);
      }
    }
  }
  return res[amount] !== Infinity ? res[amount] : -1;
};
