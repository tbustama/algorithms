var pacificAtlantic = function (heights) {
  let rows = heights.length,
    cols = heights[0].length;
  // create two sets for indexs touching pacific and atlantic
  let pac = new Set();
  let atl = new Set();

  const dfs = (r, c, set, prevHeight) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      set.has([r, c].toString()) ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    set.add([r, c].toString());
    dfs(r - 1, c, set, heights[r][c]);
    dfs(r + 1, c, set, heights[r][c]);
    dfs(r, c - 1, set, heights[r][c]);
    dfs(r, c + 1, set, heights[r][c]);
  };
  // run a dfs on top/bottom rows and left/right cols

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  // traverse through every cell and if contained in both sets store in result array
  let res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac.has([r, c].toString()) && atl.has([r, c].toString())) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
