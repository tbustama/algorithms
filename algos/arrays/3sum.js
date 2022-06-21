var threeSum = function (nums) {
  let finalArr = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  let idx = 0;
  while (idx < nums.length - 2) {
    let l = idx + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[idx] + nums[l] + nums[r];
      if (sum === 0) {
        finalArr.push([nums[idx], nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      } else if (sum < 0) {
        l += 1;
      } else {
        r -= 1;
      }
    }
    idx += 1;
    while (nums[idx] === nums[idx - 1] && idx < nums.length - 2) {
      idx += 1;
    }
  }
  return finalArr;
};

console.log(threeSum([0, 0, 0, 0, 0, 0]));
