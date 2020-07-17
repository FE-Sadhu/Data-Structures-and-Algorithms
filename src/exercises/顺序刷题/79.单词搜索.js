/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (40.81%)
 * Likes:    478
 * Dislikes: 0
 * Total Accepted:    69.9K
 * Total Submissions: 166.1K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for(let x = 0; x < board.length; x++) {
    for(let y = 0; y < board[x].length; y++) {
      if (board[x][y] === word[0]) { // 找到搜索开始点
        let road = {
          [`${x}~${y}`]: word[0] // 对象 key 为表达式要用 [ ] 包裹
        }
        let flag = backTack(x, y, word.slice(1), road);
        if (flag) return true;
      }
    }
  }
  return false;

  function backTack(x, y, word, road) {
    // 结束条件
    if(!word.length) return true;
    // for 选择 in 选择列表
    // 选择列表:
    //        x-1,y
    // x,y-1  x,y   x,y+1
    //        x+1,y
    let chooses = [`${x-1}~${y}`, `${x}~${y+1}`, `${x+1}~${y}`, `${x}~${y-1}`];
    for(let choose of chooses) {
      let x = Number(choose.split('~')[0]),
          y = Number(choose.split('~')[1]);
      // 淘汰不合法选择
      if (x < 0 || y < 0 || !board[x] || !board[x][y]) continue;
      if(choose in road) continue; // 已走路径不走
      if(board[x][y] !== word[0]) continue; // 不等于目标搜索单词不走

      // 做选择
      road[choose] = board[x][y];
      word = word.slice(1); // string 也有 slice 方法
      // 回溯
      let flag = backTack(x, y, word, road);
      if (flag) return true;
      // 撤销选择
      word = road[choose] + word;
      delete road[choose];
    }
  }
};
// @lc code=end

