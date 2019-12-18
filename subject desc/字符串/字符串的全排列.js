/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。例如输入字符串 abc，
 * 则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba。
 */

 /**
  * 思路：
  * 字符串全排列算法。
  * 固定第一个元素，剩余元素个数大于 1 的，拿第一个元素分别与剩余元素交换位置。交换完位置后各自再固定剩余元素中的第一个元素，然后再
  * 彼此交换，直至剩余元素个数没有。 递归思想。
  */



 /**
  * 交换数组中指定坐标的 2 个元素
  * @param {Array} arr
  * @param {Number} i
  * @param {Number} j
  */
 function swap(arr, i, j) {
    let middle = arr[i];
    arr[i] = arr[j];
    arr[j] = middle;
    middle = null;
 }

/**
 * 全排列
 * @param {String} str 输入字符串
 * @param {Number} n 起始位置
 */
function perm(str, n = 0) {
  const strArr = str.split('');
  const length = strArr.length;
  if (length === n) {
    console.log(strArr.join(' '));
    return;
  }

  for (let i = n; i < length; ++i) {
    swap(strArr, n, i); // 交换，改变数组
    perm(strArr.join(''), n + 1); // 改变后的数组用于递归
    swap(strArr, n, i); // 交换回来，回归进入该轮循环时最初的数组，给下一轮循环用
  }
}

/**
 * 测试代码
 */

 perm('abcd')