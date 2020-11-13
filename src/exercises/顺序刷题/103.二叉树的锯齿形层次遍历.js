/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.81%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    78.9K
 * Total Submissions: 143K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let queue = [],
      res = [[]];
  let flag = 'special',
      count = 0;

  // 第一层
  queue.push(root);
  queue.push(flag);

  while((node = queue.shift())) {
    if(node === flag) { // 一层遍历完了
      if(queue.length === 0) { // 若没有下一层了
        return res;
      }
      queue.push(flag);
      count++;
      res.push([])
      continue;
    }
    res[count].push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
};
// @lc code=end

