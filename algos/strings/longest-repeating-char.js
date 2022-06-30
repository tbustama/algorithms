var characterReplacement = function (s, k) {
  let map = new Map();
  let res = 0;
  let l = 0;
  for (let r in s) {
    if (map.get(s[r])) {
      map.set(s[r], map.get(s[r]) + 1);
    } else {
      map.set(s[r], 1);
    }
    while (r - l + 1 - Math.max(...map.values()) > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};