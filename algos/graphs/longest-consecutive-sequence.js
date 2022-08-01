var longestConsecutive = function (nums) {
  // create set of the numbers
  let set = new Set(nums);
  let max = 0;
  //   iterates through numbers, if the set doesnt contain 1 minus the num then it is a start of the sequence
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
