/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (70.44%)
 * Likes:    350
 * Dislikes: 0
 * Total Accepted:    98.3K
 * Total Submissions: 136.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
var postorderTraversal = function(root) {
  // 方法一: 递归
  /*
  let res = [];
  function helper(node) {
    if(!node) return;
    helper(node.left);
    helper(node.right);
    res.push(node.val);
  }
  helper(root);
  return res;
  */

  // 方法二: 迭代 -> 颜色标记法
  if(!root) return [];
  const stack = [],
        res = [];
  stack.push({color: 'White', node: root});

  while(stack.length > 0) {
    const {color, node} = stack.pop();
    if(color === 'gray') {
      res.push(node.val);
    } else {
      // 后序: 左右根
      // 入栈: 根右左
      stack.push({color: 'gray', node});
      node.right && stack.push({color: 'White', node: node.right});
      node.left && stack.push({color: 'White', node: node.left});
    }
  }
  return res;
};
// @lc code=end

