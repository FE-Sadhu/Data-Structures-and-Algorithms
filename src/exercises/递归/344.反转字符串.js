// 法一: 利用 js api
function reverseString(s) {
  return s.reverse()
}

// 法二： 递归 
function reverseString2(s) {
  function helper(arr, start, end) {
    if (start >= end) {
      return arr
    }
    var head = arr[start];
    arr[start] = arr[end];
    arr[end] = head;
    helper(arr, start + 1, end - 1);
  }

  helper(s, 0, s.length - 1);
}

// 法三： 迭代
function reverseString3(s) {
  let start = 0
  let end = s.length - 1;
  while(start >= end) {
    [s[end], s[start]] = [s[start], s[end]]
    start++
    end--
  }
  return s
}