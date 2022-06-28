var numDecodings = function (s) {
  let dp = new Map();
  dp.set(s.length, 1);

  const dfs = (i) => {
    if (dp.get(i)) {
      return dp.get(i);
    }
    if (s[i] == "0") {
      return 0;
    }

    let res = dfs(i + 1);
    if (
      i + 1 < s.length &&
      (s[i] == "1" ||
        (s[i] == "2" && s[i + 1] in ["0", "1", "2", "3", "4", "5", "6"]))
    ) {
      res += dfs(i + 2);
    }
    dp.set(i, res);
    return res;
  };
  return dfs(0);
};
console.log(numDecodings("12"));
