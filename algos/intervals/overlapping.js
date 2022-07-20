var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  if (intervals.length === 1) {
    return count;
  }
  let i = 0;
  let j = 1;
  intervals.sort(function (a, b) {
    return a[1] - b[1];
  });
  while (j < intervals.length) {
    if (intervals[i][1] <= intervals[j][0]) {
      i = j;
    } else {
      count++;
    }
    j++;
  }

  return count;
};
