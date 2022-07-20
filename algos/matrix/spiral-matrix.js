var spiralOrder = function (matrix) {
  let result = [];
  let startRow = 0,
    startCol = 0,
    endRow = matrix.length - 1,
    endCol = matrix[0].length - 1;
  while (result.length < matrix.length * matrix[0].length) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(matrix[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      result.push(matrix[row][startCol]);
    }

    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }
  return result;
};
