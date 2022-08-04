var minMeetingRooms = function (intervals) {
  let start = [];
  let end = [];
  for (let interval of intervals) {
    start.push(interval[0]);
    end.push(interval[1]);
  }
  start.sort((a, b) => {
    return a - b;
  });
  end.sort((a, b) => {
    return a - b;
  });
  console.log(start, end);
  let [res, count] = [0, 0];
  let [s, e] = [0, 0];
  while (s < start.length) {
    if (start[s] < end[e]) {
      s += 1;
      count += 1;
    } else {
      e += 1;
      count -= 1;
    }
    res = Math.max(res, count);
  }
  return res;
};
