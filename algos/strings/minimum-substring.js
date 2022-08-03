var minWindow = function (str, target) {
  if (target === "" || str === "") {
    return "";
  }

  let [countT, window] = [new Map(), {}];

  for (let char of target) {
    if (!countT.has(char)) {
      countT.set(char, 0);
    }
    countT.set(char, countT.get(char) + 1);
  }

  let [have, need] = [0, countT.size];
  let [res, resLen] = [[-1, -1], str.length + 1];
  let l = 0;

  for (let r in str) {
    let char = str[r];
    if (!(char in window)) {
      window[char] = 0;
    }
    window[char] += 1;

    if (countT.get(char) && window[char] === countT.get(char)) {
      have++;
    }

    while (have === need) {
      if (r - l + 1 < resLen) {
        resLen = r - l + 1;
        res = [l, r];
      }

      window[str[l]] -= 1;
      if (countT.has(str[l]) && window[str[l]] < countT.get(str[l])) {
        have--;
      }
      l++;
    }
  }
  [l, r] = res;
  return resLen === str.length + 1 ? "" : str.slice(l, parseInt(r) + 1);
};
