var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = res[res.length - 1];
    if (cur[1] >= intervals[i][0]) {
      cur[1] = Math.max(cur[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
