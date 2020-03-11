/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.81%)
 * Likes:    1842
 * Dislikes: 0
 * Total Accepted:    201.2K
 * Total Submissions: 697.6K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s; // 任何单字符的回文是其自己

  let start = 0,
      maxLength = 1; // 假如 ac , 那至少 a、c 单独的是回文的
  
  function helper(left, right) { // 帮助我们比较，移动指针
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength ){ // 这个判断保证了取的是最长的回文子串。maxLength 比较小时才变 start，取更大的 maxLength
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for(let i = 0; i < s.length; i++) {
    helper(i - 1, i + 1); // 比如 s 为偶数 babad 时
    helper(i, i + 1); // 比如 s 为奇数 baccad 时。
  }

  return s.substring(start, start + maxLength); // 提起从 开始索引 到 结束索引 （不包含结束索引）之间的字符串。
};
// @lc code=end

