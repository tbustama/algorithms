var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
