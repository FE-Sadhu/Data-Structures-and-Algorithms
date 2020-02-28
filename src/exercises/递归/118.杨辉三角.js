// 找规律方式
var generate = function(numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    var eachRow = [];
    for(let j = 0; j < (i + 1); j++) {
      if (j === 0 || i === j) {
        eachRow.push(1);
        continue;
      }
      eachRow.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    res.push(eachRow);
    eachRow = null;
  }
  return res;
}

// 优化

var generate1 = function(numRows) {
  if (numRows <= 0 ) return [];
  if (numRows === 0) return [[1]];
  if (numRows === 1) return [[1], [1, 1]];

  const res = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    res[i] = [1];
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res[i].push(1);
  }
  return res;
}