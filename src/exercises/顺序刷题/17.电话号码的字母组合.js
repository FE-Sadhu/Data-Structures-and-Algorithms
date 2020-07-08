/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (52.80%)
 * Likes:    778
 * Dislikes: 0
 * Total Accepted:    127.8K
 * Total Submissions: 237.4K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const input = digits.split(''),
        map = {
          2: 'abc',
          3: 'def',
          4: 'ghi',
          5: 'jkl',
          6: 'mno',
          7: 'pqrs',
          8: 'tuv',
          9: 'wxyz'
        },
        res = [];
  
  function backTrack (item, chooses) {
    if (!chooses) {
      res.push(item);
      return;
    }
    for(let choose of chooses) {
      // 做选择
      item += choose;

      // 回溯
      let number = input.shift();
      backTrack(item, map[number]);
      // 撤销选择
      let arr = item.split('');
      arr.pop();
      item = arr.join('');
      input.unshift(number);
    }
  }

  backTrack('', map[input.shift()])

  return res;
};
// @lc code=end

