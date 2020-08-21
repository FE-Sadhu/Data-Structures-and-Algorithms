/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (41.68%)
 * Likes:    345
 * Dislikes: 0
 * Total Accepted:    122.3K
 * Total Submissions: 277.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
  /**
   * 递归
  */
/*
  if (!root) return 0
  if (!root.left && !root.right) return 1

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  } else if (root.left) {
    return 1 + minDepth(root.left)
  } else {
    return 1 + minDepth(root.right)
  }
*/

  /**
   * BFS
   */
  if (!root) return 0
  let queue = [root, 'special'],
      node = null,
      depth = 1

  while ((node = queue.shift())) {
    if (node === 'special') {
      if (!queue.length) return depth
      depth++
      queue.push('special')
      continue
    }
    console.log(depth)
    if (!node.left && !node.right) {
      return depth
    }
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
};
// @lc code=end

