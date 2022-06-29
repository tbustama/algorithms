var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let i = nums.length - 2;
  let j = nums.length - 1;
  while (i >= 0) {
    if (nums[i] >= j - i) {
      j = i;
    }
    i--;
  }
  return j === 0;
};
