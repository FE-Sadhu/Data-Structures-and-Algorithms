/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (36.42%)
 * Likes:    1127
 * Dislikes: 0
 * Total Accepted:    302.1K
 * Total Submissions: 787.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 定义：接收一个字符串数组。
  // 若第一个字符是公共前缀则返回第一个字符 + 其余字符串组成的新数组的公共前缀，
  // 否则返回 ''。
  let first, flag;
  try {
    first = strs[0].substring(0, 1),
    flag = true;
  } catch {
    flag = false
  }
  for(let i = 0; i < strs.length; i++) {
    if (strs[i][0] !== first) {
      flag = false
    }
    strs[i] = strs[i].slice(1);
  }
  if (flag) {
    return first + longestCommonPrefix(strs)
  } else {
    return ''
  }
  // 时间复杂度: O()
};
// @lc code=end

