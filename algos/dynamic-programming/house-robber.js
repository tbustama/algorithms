var rob = function (nums) {
  let res = new Array(nums.length).fill(0);
  res[0] = nums[0];
  if (nums.length === 1) {
    return nums[0];
  }
  res[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(nums[i] + res[i - 2], res[i - 1]);
  }
  return res[res.length - 1];
};
