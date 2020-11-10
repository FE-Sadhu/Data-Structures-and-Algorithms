/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.21%)
 * Likes:    3270
 * Dislikes: 0
 * Total Accepted:    379.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 方法一: 双指针
  /*
  let i, j = 0; // 两个指针，j 始终指向子字符串头部，i 始终指向子字符串尾部
  let maxLength = 0;
  const set = new Set(); // 集合用于缓存字符
  for (i = 0; i < s.length; i++) {
    while(set.has(s.charAt(i))) {
      set.delete(s.charAt(j));
      j++;
    }
    set.add(s.charAt(i));
    maxLength = Math.max(maxLength, i - j + 1);
  }
  return maxLength;
  */

  // 方法二: 滑动窗口
  /*
  if(!s) return 0;
  let left = 0,
      right = 0,
      len = -Infinity;
  
  let window = []

  while(right < s.length) {
    let add = s[right]; // 待添加进窗口的元素
    // what time to shrink window
    while(window.includes(add)) {
      // len = Math.max(len, right - left); 放在这儿也可以
      left++;
      window.shift();
    }
    right++; // 添加进窗口
    len = Math.max(len, right - left); 
    window.push(add);
  }
  return len;
  */
 /* 滑动窗口 */
  let left = 0,
      right = 0,
      len = s ? -Infinity : 0;

  const window = []

  while (right < s.length) {
    let add = s[right] // 待添加进窗口的元素
    // what time to shrink
    while(window.includes(add)) {
      left++
      window.shift() // 窗口左移缩小
    }
    right++ // 添加进窗口
    len = Math.max(len, right - left)
    window.push(add)
  }

  return len
};
// @lc code=end

