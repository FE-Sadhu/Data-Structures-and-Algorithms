/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 *
 * https://leetcode-cn.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (38.60%)
 * Likes:    248
 * Dislikes: 0
 * Total Accepted:    17.8K
 * Total Submissions: 41.8K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key
 * 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 
 * 一般来说，删除节点可分为两个步骤：
 * 
 * 
 * 首先找到需要删除的节点；
 * 如果找到了，删除它。
 * 
 * 
 * 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。
 * 
 * 示例:
 * 
 * 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * 给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
 * 
 * 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 4   6
 * ⁠/     \
 * 2       7
 * 
 * 另一个正确答案是 [5,2,6,null,4,null,7]。
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 2   6
 * ⁠  \   \
 * ⁠   4   7
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // 1. 找到 key 的节点
  // 2. 如果 key 节点无孩子，则直接删除该节点
  // 3. 如果 key 节点只有一个孩子，则孩子接替该节点
  // 4. 如果 key 节点有两个孩子, 可选择右子树最小的后代节点接替自己

  if(!root) return null;

  if(root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if(root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if(!root.left && !root.right) return null;
    if(!root.left || !root.right) {
      return root.left ? root.left : root.right;
    }

    // 右子树最小的节点来替换
    let node = root.right;
    while(node.left) {
      node = node.left;
    }
    root.val = node.val;
    root.right = deleteNode(root.right, node.val);
  }

  return root;
};
