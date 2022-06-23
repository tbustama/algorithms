var lengthOfLIS = function (nums) {
  let LTS = new Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LTS[i] = Math.max(LTS[i], 1 + LTS[j]);
      }
    }
  }
  return Math.max(...LTS);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
