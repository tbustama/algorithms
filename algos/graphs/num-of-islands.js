var numIslands = function (grid) {
  // create copy matrix to track seen cells
  let seen = new Array(grid.length).fill().map(() => {
    return new Array(grid[0].length).fill(false);
  });

  let count = 0;
  const dfs = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      seen[r][c] ||
      grid[r][c] === "0"
    ) {
      return;
    }
    seen[r][c] = true;
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
    return 1;
  };

  //   iterate through all cells, run dfs if it is a 1 and hasn't been seen
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (seen[r][c] || grid[r][c] === "0") {
        continue;
      }
      count += dfs(r, c);
    }
  }
  return count;
};
