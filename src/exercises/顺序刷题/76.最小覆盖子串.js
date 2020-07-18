/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (35.63%)
 * Likes:    648
 * Dislikes: 0
 * Total Accepted:    63.7K
 * Total Submissions: 166.4K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
 * 
 * 示例：
 * 
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 
 * 说明：
 * 
 * 
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 滑动窗口
  // 左闭右开的窗口
  let left = 0,
      right = 0,
      count = 0, // 判断窗口内有多少个符合目标的元素
      len = Infinity, // 窗口的大小
      start = 0; // 最小子串的起始索引
  
  const window = {}, // 存储窗口内目标元素数量 {目标元素: 出现次数}
        target = {}; // 目标元素 { 元素: 出现次数}
  for(let i = 0; i < t.length; i++) {
    target[t[i]] = target[t[i]] ? ++target[t[i]] : 1;
  }

  while(right < s.length) {
    let add = s[right]; // 待添加进窗口的元素
    right++; // 往窗口添加元素
    if(add in target) {
      window[add] = window[add] ? ++window[add] : 1;
      if(window[add] === target[add]) {
        count++
      }
    }

    // 窗口内满足目标需求元素了，缩小窗口优化结果 shrink window
    while(count === Object.keys(target).length) {
      if(right - left < len) { // 取最小长度
        len = right - left;
        start = left;
      }
      let del = s[left]; // 待移出窗口的元素
      left++; // 左移窗口
      if(del in target) {
        if(window[del] === target[del]) {
          count--;
        }
        window[del]--;
      }
    }
  }

  return len === Infinity ? '' : s.substr(start, len);
};
// @lc code=end

