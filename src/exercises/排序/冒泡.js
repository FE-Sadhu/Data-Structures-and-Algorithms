/**
 * 左右互换，每轮排序会把最大值放到最后
 * 
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 */

let arr = [4, 2, 5, 7, 1, 3, 6];

function bubble (arr) {
  let length = arr.length
  while (length >= 2) {
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    length--;
  }
}

function swap (arr, f, s) {
  let tmp = arr[f]
  arr[f] = arr[s]
  arr[s] = tmp
}

bubble(arr)

console.log(arr)