/**
 * 请实现一个函数，把字符串中的每个空格替换成"%20"。
 * 例如输入“We are happy.”，则输出“We%20are%20happy.”
 */

// 原始解法 正则表达式替换，较取巧。

function replaceEmpty(str) {
  const reg = / /g;
  return str.replace(reg, '%20');
}

// 更新思路
// 先算出替换后的字符串长度，然后一个个填字符。时间复杂度 O(n)

function replaceEmpty2(str) {
  str = str.split(''); // 字符串变为数组，items 是每个字符

  let count = 0, // 找出空格个数
    i = 0,
    j = 0;
  
  for(let i = 0; i < str.length; i++) {
    str[i] === ' ' && ++count;
  }

  let length = str.length + count * 2; // %20 比 空格 多两个字符
  const result = new Array(length);

  while( i < result.length ) {
    if (str[j] === ' ') {
      result[i++] = '%';
      result[i++] = '2';
      result[i++] = '0';
      j++
    } else {
      result[i++] = str[j++]
    }
  }

  return result.join(''); // 数组每项拼接成字符串，分隔符为空。
}

/**
 * 测验结果
 */

console.log(replaceEmpty('We are happy.'))
console.log(replaceEmpty2('We are happy.'))
