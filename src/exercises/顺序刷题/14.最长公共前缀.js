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
  // 方法一: 递归
  // 定义：接收一个字符串数组。
  // 若第一个字符是公共前缀则返回第一个字符 + 其余字符串组成的新数组的公共前缀，
  // 否则返回 ''。
  /*
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
  */

  // 方法二： 水平查找
  // 两个对比结果与下一个接着对比
  // 时间复杂度: O(S)
  // 空间复杂度: O(1)
  if(!strs.length) return '';
    
  let ans = strs[0]; // 将第一个字符串设为默认前缀
  // 然后从第二个字符串开始遍历
  for(let i = 1; i < strs.length; i++) {
      let length = Math.min(ans.length, strs[i].length);
      for(let j = 0; j < length; j++) {
          if(ans[j] !== strs[i][j]) {
              ans = j !== 0 ? ans.substring(0, j) : '';
              break;
          }
      }
      if(ans === '') break;
      if(ans.length > length) ans = ans.substring(0, length);
  }
  return ans;
};
// @lc code=end

