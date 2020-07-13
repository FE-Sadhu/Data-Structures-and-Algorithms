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
  /* 
    方法一： 更好的回溯
    相对方法二，把选择列表缩小，只有两个选择 ( 和 )
    一定要画图画递归树，剪枝得好，都不用专门写个函数判断括号是否合法。
  */
  const res = [],
        left = n, // 左括号剩余
        right = n; // 右括号剩余

  function dfs(road, left, right) {
    // 结束条件
    if (road.length === 2*n) {
      res.push(road);
      return;
    }

    if (left > right) { // 左括号剩余大于右括号剩余了，剪枝
      return;
    }

    if (left > 0) {
      // 作选择
      road += '(';
      left--;
      // 回溯
      dfs(road, left, right);
      // 撤销选择
      road = road.substring(0, road.length - 1);
      left++;
    }

    if (right > 0) {
      // 上面的作选择也可以用下面这种写法
      // 下面这种写法不会改变作选择的变量，等同于撤销了选择
      dfs(road + ')', left, right - 1);
    }
  }

  dfs('', left, right);
  return res;
  /* 
  // 方法二：回溯，超时。
  const chooses = '('.repeat(n) + ')'.repeat(n),
        res = [];

  function backTrack(road, chooses) {
    // 结束条件
    if (road.length >= n*2) {
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
  */
};
// @lc code=end

