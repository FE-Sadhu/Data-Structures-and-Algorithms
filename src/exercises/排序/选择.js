/**
 * 处理该元素时，找出包括该元素在内所有元素中的最小值，与该元素交换位置
 */
let arr = [4, 2, 5, 7, 1, 3, 6];

function select(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIdx = arr[j] < arr[minIdx] ? j : minIdx
    }
    if (minIdx !== i) {
      swap(arr, i, minIdx)
    }
  }
}

function swap (arr, f, s) {
  let tmp = arr[f]
  arr[f] = arr[s]
  arr[s] = tmp
}

select(arr)

console.log(arr)