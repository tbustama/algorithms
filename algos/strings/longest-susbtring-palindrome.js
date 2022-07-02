var longestPalindrome = function (s) {
  let i = 0;
  let finalStr = s[0];
  while (i < s.length - 1) {
    finalStr = oddPalindrome(s, i, finalStr);
    finalStr = evenPalindrome(s, i, finalStr);
    i++;
  }
  return finalStr;
};

const oddPalindrome = function (s, i, finalStr) {
  let l = i - 1;
  let r = i + 1;
  while (l >= 0 && r < s.length) {
    if (s[l] === s[r]) {
      if (r - l + 1 > finalStr.length) {
        finalStr = s.slice(l, r + 1);
      }
      l--;
      r++;
    } else {
      break;
    }
  }
  return finalStr;
};

const evenPalindrome = function (s, i, finalStr) {
  let r = i + 1;
  let l = i;
  while (l >= 0 && r < s.length) {
    if (s[l] === s[r]) {
      if (r - l + 1 > finalStr.length) {
        finalStr = s.slice(l, r + 1);
      }
      l--;
      r++;
    } else {
      break;
    }
  }
  return finalStr;
};
