var maxArea = function (height) {
  let result = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    result = Math.max(area, result);
    if (height[l] <= height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return result;
};
