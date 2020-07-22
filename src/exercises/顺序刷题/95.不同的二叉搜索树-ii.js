/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (61.83%)
 * Likes:    551
 * Dislikes: 0
 * Total Accepted:    49.8K
 * Total Submissions: 75.4K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：3
 * 输出：
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释：
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  // 以 i 节点来说 (1 <= i <= n)
  // 左子树肯定是由 1 ~ i 为节点所组成的 BST 数组
  // 右子树肯定是由 i ~ n 为节点所组成的 BST 数组
  
  // memorization 
  const cache = new Array(n + 1);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(n + 1);
  }

  if (!n) return [];
  function helper(start, end) {
      // 递归
      // 定义：f(start, end),返回由 start 到 end 为节点组成的 BST 的集合。
      // 出口： start > end 时，return [null]
      if (start > end) return [null];
      if(cache[start][end]) return cache[start][end];

      const res = [];
      for(let i = start; i <= end; i++) { // 从 start 到 end 的每个节点都可能为根节点
          let leftTrees = helper(start, i - 1); // 当 i 为根节点时，返回由 start 到 i - 1 为节点的所有 BST 的结合。（由于 BST 特性，这部分集合只能是 i 为根节点的左子树集合）
          let rightTrees = helper(i + 1, end); // 右子树的集合。
          // 接下来就分别遍历左右子树，把每种左右子树的组合情况都添加到此时的根节点 i 上。
          for(let l = 0; l < leftTrees.length; l++) {
              for(let r = 0; r < rightTrees.length; r++) {
                  const node = new TreeNode(i);
                  node.left = leftTrees[l];
                  node.right = rightTrees[r];
                  res.push(node);
              }
          }
      }
      return cache[start][end] = res;
  }
  return helper(1, n);
};
// @lc code=end

