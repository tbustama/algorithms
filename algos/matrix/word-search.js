var exist = function (board, word) {
  let rows = board.length,
    columns = board[0].length;
  let seen = new Array(rows).fill().map(() => {
    return new Array(columns).fill(false);
  });
  const dfs = (r, c, i) => {
    if (i === word.length) {
      return true;
    }
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      board[r][c] !== word[i] ||
      seen[r][c]
    ) {
      return false;
    }
    seen[r][c] = true;
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    seen[r][c] = false;
    return res;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};
