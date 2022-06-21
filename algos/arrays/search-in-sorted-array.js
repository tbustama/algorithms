var search = function (nums, target) {
  let result = -1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) {
      if (target < nums[l] || target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target > nums[r] || target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return result;
};
