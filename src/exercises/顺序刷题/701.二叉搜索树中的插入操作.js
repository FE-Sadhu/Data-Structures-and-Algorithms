/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 *
 * https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (72.32%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 22.3K
 * Testcase Example:  '[4,2,7,1,3]\n5'
 *
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。
 * 
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
 * 
 * 例如, 
 * 
 * 
 * 给定二叉搜索树:
 * 
 * ⁠       4
 * ⁠      / \
 * ⁠     2   7
 * ⁠    / \
 * ⁠   1   3
 * 
 * 和 插入的值: 5
 * 
 * 
 * 你可以返回这个二叉搜索树:
 * 
 * 
 * ⁠        4
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \   /
 * ⁠   1   3 5
 * 
 * 
 * 或者这个树也是有效的:
 * 
 * 
 * ⁠        5
 * ⁠      /   \
 * ⁠     2     7
 * ⁠    / \   
 * ⁠   1   3
 * ⁠        \
 * ⁠         4
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if(!root) return new TreeNode(val);
  function travel(root, val) {
      let flag = val > root.val;
      if(flag) {
          if(!root.right) {
              root.right = new TreeNode(val);
              return;
          } else {
              travel(root.right, val);
          }
      } else {
          if(!root.left) {
              root.left = new TreeNode(val);
              return;
          } else {
              travel(root.left, val);
          }
      }
  }
  
  travel(root, val);
  
  return root;
};
// @lc code=end

