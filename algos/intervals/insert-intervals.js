var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    } else if (i === intervals.length - 1) {
      intervals.push(newInterval);
    }
  }
  let res = [intervals[0]];
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
