function isMagical(matrix) {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !matrix.every((row) => Array.isArray(row))
  ) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
    if (i === 0) {
      var expectedRowSum = rowSum;
    } else if (rowSum !== expectedRowSum) {
      return false;
    }
  }

  for (let j = 0; j < cols; j++) {
    const colSum = matrix.reduce((sum, row) => sum + row[j], 0);
    if (colSum !== expectedRowSum) {
      return false;
    }
  }

  return true;
}
