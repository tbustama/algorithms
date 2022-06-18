var twoSum = function (nums, target) {
  let obj = {};
  for (i in nums) {
    if (obj[target - nums[i]]) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
