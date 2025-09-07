module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  matrix.forEach((row, index) => {
    if (index % 2 === 1) {
      result = result.concat(row.slice().reverse());
    } else {
      result = result.concat(row);
    }
  });

  return result;
};
