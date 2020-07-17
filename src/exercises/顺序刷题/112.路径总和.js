/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (49.20%)
 * Likes:    382
 * Dislikes: 0
 * Total Accepted:    115.8K
 * Total Submissions: 227.7K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) return false;
  let road = root.val;

  function dfs(road, root) {
    if(!root.left && !root.right) {
      if(road === sum) return true;
    }

    let chooses = [root.left, root.right];
    for(let choose of chooses) {
      if (!choose) continue;
      road += choose.val;
      let flag = dfs(road, choose);
      if (flag) return true;
      road -= choose.val;
    }
  }
  let flag = dfs(road, root);
  if(flag) return true;
  else return false;
};
// @lc code=end

