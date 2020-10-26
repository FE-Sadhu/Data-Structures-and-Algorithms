/**
 * 拆分数组，分而治之，最终只剩一个元素的数组时再比大小开始融合
 * 
 * 时间复杂度: O(n * logn)
 */

function mergeSort(arr) {
  if (arr.length > 1) {
    let { length } = arr
    let middle = Math.floor(length / 2)

    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle, length))

    return merge(left, right)
  }
  return arr
}

function merge(left, right) {
  const result = [];
  
  let l = 0,
      r = 0;

  while (l < left.length && r < right.length) {
    result.push(left[l] > right[r] ? right[r++] : left[l++])
  }

  return result.concat(l < left.length ? left.slice(l) : right.slice(r))
}

let arr = [4, 2, 5, 7, 1, 3, 6];

console.log(mergeSort(arr))