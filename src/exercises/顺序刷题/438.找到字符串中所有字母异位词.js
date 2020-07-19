/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (41.54%)
 * Likes:    318
 * Dislikes: 0
 * Total Accepted:    31.9K
 * Total Submissions: 70.5K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if(!s) return [];
  // 滑动窗口
  let len = p.length;
  let left = 0,
      right = 0,
      count = 0,
      res = [];
  
  const window = {}, // 窗口内符合目标元素的个数: {目标元素: 个数}
        target = {};
  for(let val of p) {
    target[val] = target[val] ? ++target[val] : 1;
  }

  while(right < s.length) {
    let add = s[right]; // 待添加进窗口的元素
    right++; // 添加进窗口
    if(add in target) {
      window[add] = window[add] ? ++window[add] : 1;
      if(window[add] === target[add]) {
        count++;
      }
    }

    // shrink window
    while(right - left >= len) {
      if(count === Object.keys(target).length) {
        res.push(left);
      }
      let del = s[left]; // 待移出窗口的元素
      left++; // 缩小窗口
      if(del in target) {
        if(window[del] === target[del]) {
          count--;
        }
        window[del] = --window[del];
      }
    }
  }

  return res;
};
// @lc code=end

