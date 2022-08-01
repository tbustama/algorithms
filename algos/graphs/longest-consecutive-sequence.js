var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let temp = 1;
      let next = num + 1;
      while (set.has(next)) {
        next++;
        temp++;
      }
      max = Math.max(temp, max);
    }
  }
  return max;
};
