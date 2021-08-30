
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0 || matrix === null ) return [];

  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) { 
      res = res.concat(matrix[i].reverse());
    } else {
      res = res.concat(matrix[i]);
    }
  } 

  return res;
}
