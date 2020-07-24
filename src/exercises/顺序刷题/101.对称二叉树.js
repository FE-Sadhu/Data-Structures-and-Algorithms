/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (50.37%)
 * Likes:    923
 * Dislikes: 0
 * Total Accepted:    180.2K
 * Total Submissions: 342.9K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // 方法一: 递归
  /*
  if(!root) return true;
  function helper(left, right) {
    // 两个都不存在
    if(!left && !right) return true;
    // 只有一个存在
    if(!left || !right) return false;
    // 都存在，就判断值
    if(left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left);
    } else {
      return false;
    }
  }
  return helper(root.left, root.right);
  */

  // 方法二: 迭代: 利用队列
  if(!root) return true;
  const queue = [root.left, root.right];

  while(queue.length) {
    let l = queue.shift();
    let r = queue.shift();
    if(!l && !r) continue;
    if(!l || !r) return false;
    if(l.val !== r.val) return false;

    queue.push(l.left);
    queue.push(r.right);

    queue.push(r.left);
    queue.push(l.right);
  }
  return true;
};
// @lc code=end
// test
/*
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    }, 
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}

isSymmetric(root);
*/
