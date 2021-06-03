/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.94%)
 * Likes:    392
 * Dislikes: 0
 * Total Accepted:    241.4K
 * Total Submissions: 377.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /*
  if (s.length !== t.length) {
    return false;
  }

  // 26 个英文字母
  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let j = 0; j < t.length; j++) {
    const index = t.charCodeAt(j) - 'a'.charCodeAt(0);
    arr[index]--;
    if (arr[index] < 0) {
      return false;
    }
  }

  return true;
  */

  if (s.length !== t.length) {
    return false;
  }

  // 26 个英文字母
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash.hasOwnProperty(s[i])) {
      hash[s[i]]++;
      continue;
    };
    hash[s[i]] = 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!hash.hasOwnProperty(t[j])) {
      return false;
    }
    hash[t[j]]--;
    if (hash[t[j]] < 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end
