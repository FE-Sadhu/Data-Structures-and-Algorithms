/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (46.98%)
 * Likes:    710
 * Dislikes: 0
 * Total Accepted:    139.5K
 * Total Submissions: 290K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // fill API 赋的是同一引用，在内写 new Array() 也不会为数组每个元素开辟新的内存空间
  // const rowArray = new Array(numRows).fill([]);
  // const rowArray = new Array(numRows).fill().map(() => new Array())
  // console.log(rowArray);
  // for(let i = 0; i < s.length; i++) {
  //   const mod = (i + 1) % numRows; // 取余决定放进哪行
  //   mod === 0 ? rowArray[numRows - 1].push(s.charAt(i)) : rowArray[mod - 1].push(s.charAt(i))
  // }
  // const result = rowArray.flat()
  // return result.join('')
  if(numRows === 1) return s;
  let i = 0, // 行标
      flag = -1; // Z 字转折点时反转
  const rowArray = new Array(numRows).fill().map(() => new Array())
  for(let val of s) {
    rowArray[i].push(val);
    if (i === 0 || i === numRows - 1) flag = -flag
    i += flag;
  }
  return rowArray.flat().join('')
};
// @lc code=end

