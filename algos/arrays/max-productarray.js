var maxProduct = function (nums) {
  let result = Math.max(...nums);
  let currentMax = 1;
  let currentMin = 1;
  for (let num of nums) {
    if (num === 0) {
      currentMax = 1;
      currentMin = 1;
      continue;
    }
    let temp = currentMax * num;
    currentMax = Math.max(temp, currentMin * num, num);
    currentMin = Math.min(temp, currentMin * num, num);
    result = Math.max(currentMax, result);
  }

  return result;
};
