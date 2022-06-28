let rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let subArr1 = nums.slice(0, nums.length - 1);
  let subArr2 = nums.slice(1, nums.length);

  const r1 = (arr) => {
    let res = new Array(arr.length).fill(0);
    res[0] = arr[0];
    res[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
      res[i] = Math.max(res[i - 2] + arr[i], res[i - 1]);
    }
    return res[res.length - 1];
  };

  return Math.max(r1(subArr1), r1(subArr2));
};
