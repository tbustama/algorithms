var isAnagram = function (s, t) {
  let hash = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let char of s) {
    if (char in hash) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  for (let char of t) {
    if (char in hash) {
      hash[char] -= 1;
      if (hash[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};
// oh
