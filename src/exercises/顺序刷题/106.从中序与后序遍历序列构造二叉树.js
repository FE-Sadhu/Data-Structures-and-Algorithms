// @ts-nocheck
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (67.03%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    25.9K
 * Total Submissions: 38.6K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  /*
  if (!inorder.length || !postorder.length) return null;

  function helper(inOrder, postOrder, postEnd, inStart, inEnd) {
    if (inStart > inEnd) return null;
    const rootVal = postOrder[postEnd];
    const root = new TreeNode(rootVal);
    
    let inOrderRootIndex = 0;
    for(let i = inStart; i <= inEnd; i++) {
      if (inOrder[i] === rootVal) {
        inOrderRootIndex = i;
        break;
      }
      // inOrder[i] === rootVal && (inOrderRootIndex = i);
    }

    root.left = helper(inOrder, postOrder, postEnd - (inEnd - inOrderRootIndex) - 1, inStart, inOrderRootIndex - 1);
    root.right = helper(inOrder, postOrder, postEnd - 1, inOrderRootIndex + 1, inEnd)

    return root;
  }

  return helper(inorder, postorder, postorder.length - 1, 0, inorder.length - 1);
  */
  if(!inorder.length || !postorder.length) {
    return null; 
  }
  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  let rootVal = postorder.pop();

  let inorderIndex = inorder.indexOf(rootVal);

  let leftsIn = inorder.slice(0, inorderIndex), // 左子树集合
    rightsIn = inorder.slice(inorderIndex + 1);
    leftsPost = postorder.slice(0, inorderIndex);
    rightsPost = postorder.slice(inorderIndex);

  let root = new TreeNode(rootVal);
  root.left = buildTree(leftsIn, leftsPost);
  root.right = buildTree(rightsIn, rightsPost);

  return root;
};
// @lc code=end

