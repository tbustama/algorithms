var canAttendMeetings = function (intervals) {
  if (intervals.length < 2) {
    return true;
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
};
