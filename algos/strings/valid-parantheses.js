let isValid = function (s) {
  if (s.length === 1) {
    return false;
  }
  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };
  for (let char of s) {
    if (char in map) {
      if (stack.length > 0 && stack[0] === map[char]) {
        stack.shift();
      } else {
        return false;
      }
    } else {
      stack.unshift(char);
    }
  }
  return stack.length === 0;
};
