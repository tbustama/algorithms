var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let l = 0;
  let res = 0;
  for (const r in s) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
