var wordBreak = function (s, wordDict) {
  let res = new Array(s.length + 1).fill(false);
  res[s.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (const word of wordDict) {
      if (s.slice(i, i + word.length) === word && i + word.length <= s.length) {
        res[i] = res[i + word.length];
      }
      if (res[i]) {
        break;
      }
    }
  }
  return res[0];
};
