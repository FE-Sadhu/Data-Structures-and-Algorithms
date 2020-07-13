/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (73.49%)
 * Likes:    1149
 * Dislikes: 0
 * Total Accepted:    145.8K
 * Total Submissions: 192.6K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const chooses = '('.repeat(n) + ')'.repeat(n),
        res = [];

  function backTrack(road, chooses) {
    // 结束条件
    if (road.length >= 6) {
      if (!res.includes(road) && isValid(road)) res.push(road);
      return;
    }
    // 选择 in 选择列表
    for(let i of chooses) {
      // 剪枝，若 i 已在路径中出现了 n 次，则这条路径肯定不符合有效括号。
      if (road.split(i).length - 1 >= n) continue;

      // 作选择
      road += i;
      // 回溯
      backTrack(road, chooses);
      // 撤销选择
      road = road.substring(0, road.length - 1);
    }
  }
  
  function isValid(road) {
    const stack = [],
          match = {'(': ')'};
    
    for(let val of road) {
      if (val in match) {
        stack.push(val);
      } else {
        if (stack.length) {
          stack.pop();
          continue;
        }
        return false;
      }
    }

    if (!stack.length) return true;
    else return false;
  }

  backTrack('', chooses);

  return res;
};
// @lc code=end

