/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.78%)
 * Likes:    1985
 * Dislikes: 0
 * Total Accepted:    391.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let rev = 0;
  while (x !== 0) {
      const digit = x % 10;
      x = ~~(x / 10); // 双重位运算取反，因为位运算的结果是整数，这里的作用就是去掉小数
      rev = rev * 10 + digit;
      if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
          return 0;
      }
  }
  return rev;
};
/**
var reverse = function(x) {
  let flag = 1;
  if (x < 0) flag = -1;
  let result = flag * Number(String(Math.abs(x)).split('').reverse().join(''));
  return (result < - Math.pow(2, 31) || result > Math.pow(2, 31) - 1) ? 0 : result;
  // 还有一种方法是取余 10 反转。
};
*/
// @lc code=end

