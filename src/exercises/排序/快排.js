function quickSort(arr) {
  return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right) // 划分数组

    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
  return arr
}

function partition (arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)]; // 中心点（主元）

  let i = left;
  let j = right;

  while(i <= j) {
    while(arr[i] < pivot) {
      i++
    }

    while(arr[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }

  return i;
}

function swap (arr, f, s) {
  let tmp = arr[f]
  arr[f] = arr[s]
  arr[s] = tmp
}

let arr = [3, 5, 1, 6, 4, 7, 2]

quickSort(arr)

console.log(arr)