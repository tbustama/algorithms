var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count = oddPalindrome(s, i, count);
    count = evenPalindrome(s, i, count);
  }

  return count + s.length;
};

let oddPalindrome = (s, i, count) => {
  let l = i - 1;
  let r = i + 1;
  while (l >= 0 && r < s.length) {
    if (s[l] !== s[r]) {
      break;
    }
    count += 1;
    l--;
    r++;
  }
  return count;
};

let evenPalindrome = (s, l, count) => {
  let r = l + 1;
  while (l >= 0 && r < s.length) {
    if (s[l] !== s[r]) {
      break;
    }
    count += 1;
    l--;
    r++;
  }
  return count;
};
