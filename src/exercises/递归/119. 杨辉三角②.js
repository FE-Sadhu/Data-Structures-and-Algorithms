function getRow(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];

  let pre = [1, 2, 1];
  let res;
  for (let i = 3; i <= rowIndex; i++) {
    res = [1];
    for (let j = 1; j < i; j++) {
      res.push(pre[j - 1] + pre[j]);
    }
    res.push(1);
    pre = res;
    res = null;
  }
  return pre;
}

// 优化
function getRow(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];

  let pre = [1, 2, 1];
  let res;
  let midIndex = (rowIndex + 1) % 2 === 0 ? ((rowIndex + 1) / 2 - 1) : (Math.ceil((rowIndex+1) / 2) - 1);
  for (let i = 3; i <= rowIndex; i++) {
    res = [1];
    for (let j = 1; j < i; j++) {
      if (j > midIndex) {
        res.push(res[i - j]);
        continue;
      }
      res.push(pre[j - 1] + pre[j]);
    }
    res.push(1);
    pre = res;
    res = null;
  }
  return pre;
}