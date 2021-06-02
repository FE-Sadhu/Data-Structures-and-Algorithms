/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (46.49%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    184.4K
 * Total Submissions: 353.6K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 * 
 * 
 * 
 * 提示：你可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const hash = new Map();
  for (let i = 0; i < s.length; i++) {
      if (!hash.has(s[i])) {
          hash.set(s[i], i);
          continue;
      }
      hash.set(s[i], -1);
  }

  for (let value of hash.values()) {
      if (value !== -1) {
          return value;
      }
  }

  return -1;
};
// @lc code=end