var characterReplacement = function (s, k) {
  let map = new Map();
  let res = 0;
  let l = 0;
  let maxF = 0;
  for (let r in s) {
    if (map.get(s[r])) {
      map.set(s[r], map.get(s[r]) + 1);
    } else {
      map.set(s[r], 1);
    }
    maxF = Math.max(maxF, map.get(s[r]));
    while (r - l + 1 - maxF > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};

// O(n) time complexity
