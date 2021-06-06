/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (47.22%)
 * Likes:    385
 * Dislikes: 0
 * Total Accepted:    239K
 * Total Submissions: 506K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const reg = /[A-Za-z0-9]/
  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    const left = s[i];
    const right = s[j];

    if (reg.test(left) && reg.test(right)) {
      if (left.toUpperCase() === right.toUpperCase()) {
        i++;
        j--;
      } else {
        return false;
      }
    } else if (reg.test(left)) {
      j--;
    } else {
      i++;
    }
  }

  return true;
};
// @lc code=end

