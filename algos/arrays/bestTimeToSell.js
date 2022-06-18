var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let currentMax = 0;
  let max = 0;
  if (prices.length === 1) return 0;
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
      right = left + 1;
      currentMax = 0;
    } else {
      if (prices[right] - prices[left] > currentMax) {
        currentMax = prices[right] - prices[left];
      }
      right += 1;
    }
    if (currentMax > max) {
      max = currentMax;
    }
  }
  return max;
};
