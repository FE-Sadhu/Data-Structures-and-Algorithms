/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (61.06%)
 * Likes:    567
 * Dislikes: 0
 * Total Accepted:    164.3K
 * Total Submissions: 260.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
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
var levelOrder = function(root) {
  // BFS 
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

