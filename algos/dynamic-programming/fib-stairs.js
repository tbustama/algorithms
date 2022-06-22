var fib = function (n) {
  let fibArray = [1, 2, 3];
  if (n <= 3) {
    return n;
  }

  let current = 4;
  while (current <= n) {
    fibArray[current - 1] = fibArray[current - 2] + fibArray[current - 3];
    current += 1;
  }
  return fibArray[fibArray.length - 1];
};
