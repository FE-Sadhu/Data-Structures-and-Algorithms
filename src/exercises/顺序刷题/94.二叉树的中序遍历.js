/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.44%)
 * Likes:    588
 * Dislikes: 0
 * Total Accepted:    196.8K
 * Total Submissions: 272.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 方法一: 递归
  /*
  const res = [];
  function helper(root) {
    if(!root) return;
    helper(root.left);
    res.push(root.val);
    helper(root.right);
  }
  helper(root);
  return res;
  */

  // 方法二：迭代
  const stack = [],
        res = [];
  let curr = root
  while(curr || stack.length !== 0) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr);
    curr = curr.right;
  }
};
// @lc code=end

