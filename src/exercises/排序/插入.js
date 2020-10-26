/**
 * 默认第一个元素是已排序好的，依次往后处理，比大小，小的就插入过来
 */

let arr = [4, 2, 5, 7, 1, 3, 6];

function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    // 处理已排序好的
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j)
      }
    }
  }
}

function swap (arr, f, s) {
  let tmp = arr[f]
  arr[f] = arr[s]
  arr[s] = tmp
}

insertSort(arr)

console.log(arr)