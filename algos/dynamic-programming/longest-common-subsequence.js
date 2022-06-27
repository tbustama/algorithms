var longestCommonSubsequence = function (text1, text2) {
  let res = new Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        res[i][j] = 1 + res[i + 1][j + 1];
      } else {
        res[i][j] = Math.max(res[i + 1][j], res[i][j + 1]);
      }
    }
  }
  //   return
  return res[0][0];
};
