var uniquePaths = function (m, n) {
  let row = new Array(n).fill(1);
  for (let i = m - 2; i >= 0; i--) {
    let newRow = new Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = row[j] + newRow[j + 1];
    }
    row = newRow;
  }

  return row[0];
};
// time complexity O(n*m) space complexity O(n)
