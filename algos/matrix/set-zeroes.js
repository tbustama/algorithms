var setZeroes = function (matrix) {
  let rows = new Array(matrix.length).fill(1);
  let columns = new Array(matrix[0].length).fill(1);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 0;
        columns[j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[i] === 0 || columns[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
