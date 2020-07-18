/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (34.30%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    34.6K
 * Total Submissions: 94.8K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * 示例1:
 * 
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // 方法一： 滑动窗口。 还有种不推荐的方法是回溯
  let left = 0,
      right = 0,
      count = 0; // 窗口中符合目标元素要求的个数
  
  const target = {},
        window = {}; // 窗口中包含的目标元素以及个数
  for(let val of s1) {
    target[val] = target[val] ? ++target[val] : 1;
  }

  while(right < s2.length) {
    let add = s2[right]; // 待添加进 window
    right++; // 添加进去
    if(add in target) {
      window[add] = window[add] ? ++window[add] : 1;
      if(window[add] === target[add]) {
        count++;
      }
    }
    // 什么时机缩小窗口
    while(right - left >= s1.length) {
      if(count === Object.keys(target).length) return true;
      let d = s2[left];
      left++;
      if(d in target) {
        if(window[d] === target[d]) {
          count--;
        }
        window[d] = --window[d];
      }
    }

  }

  return false;
};
// @lc code=end

