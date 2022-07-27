var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals;
  }
  let res = [];
  let i = 0;
  let j = 1;
  intervals.sort((a, b) => a[0] - b[0]);
  while (j < intervals.length) {
    let cur = intervals[i];
    while (j < intervals.length && cur[1] >= intervals[j][0]) {
      cur[1] = Math.max(cur[1], intervals[j][1]);
      j++;
    }
    res.push(cur);
    if (j === intervals.length - 1) {
      res.push(intervals[j]);
    }
    i = j;
    j++;
  }

  return res;
};
