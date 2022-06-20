var findMin = function (nums) {
  let result = nums[0];
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] < nums[r]) {
      return Math.min(result, nums[l]);
    }
    mid = Math.floor((l + r) / 2);
    result = Math.min(nums[mid], result);
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return result;
};

console.log(findMin([3, 4, 0, 1, 2]));
