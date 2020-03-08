// @ts-nocheck
/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (64.31%)
 * Likes:    361
 * Dislikes: 0
 * Total Accepted:    47.7K
 * Total Submissions: 74.2K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function helper(preOrder, inOrder, preHead, inStart, inEnd) {
    if (inStart > inEnd) return null;

    let rootVal = preOrder[preHead];
    const root = new TreeNode(rootVal);
    
    let inIndex = 0;
    for(let i = inStart; i <= inEnd; i++) {
      if (rootVal === inOrder[i]) {
        inIndex = i;
      }
    }

    root.left = helper(preOrder, inOrder, preHead + 1, inStart, inIndex - 1);
    root.right = helper(preOrder, inOrder, preHead + (inIndex - inStart) + 1, inIndex + 1, inEnd);

    return root;
  }
  return helper(preorder, inorder, 0, 0, inorder.length - 1);
};
// @lc code=end

