/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (72.43%)
 * Likes:    612
 * Dislikes: 0
 * Total Accepted:    212K
 * Total Submissions: 287.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
var maxDepth = function(root) {
  // 方法一: 递归
  // 定义: root 为根节点时的最大深度
  if(!root) return 0;
  if(root.left === null && root.right === null) return 1;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // 方法二： BFS
  /*
  if (!root) return 0;
    
    const queue = [root, null];
    let depth = 1,
        node;
    while((node = queue.shift()) !== undefined) {
        if (node === null) {
            // 注意⚠️： 不处理会无限循环，进而堆栈溢出
            if (queue.length === 0) return depth;
            queue.push(null);
            depth++;
            continue;
        }
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return depth;
  */
};
// @lc code=end

