var productExceptSelf = function (nums) {
  let finalArr = new Array(nums.length);
  let productFromRight = 1;
  let productFromLeft = 1;

  for (let i = 0; i < nums.length; i++) {
    finalArr[i] = productFromLeft;
    productFromLeft *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    finalArr[i] *= productFromRight;
    productFromRight *= nums[i];
  }
  return finalArr;
};
