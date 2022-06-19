var maxSubbArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let i = 1;
  while (i < nums.length) {
    currentSum += nums[i];

    if (nums[i] > currentSum) {
      currentSum = nums[i];
    }

    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
    i++;
  }
  return maxSum;
};
