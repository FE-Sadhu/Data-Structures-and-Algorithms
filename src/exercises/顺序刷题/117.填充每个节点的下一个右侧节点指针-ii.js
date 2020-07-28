/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 *
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * algorithms
 * Medium (45.58%)
 * Likes:    175
 * Dislikes: 0
 * Total Accepted:    25.7K
 * Total Submissions: 50.9K
 * Testcase Example:  '[1,2,3,4,5,null,7]'
 *
 * 给定一个二叉树
 * 
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 * 
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 
 * 初始状态下，所有 next 指针都被设置为 NULL。
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 
 * 输入：root = [1,2,3,4,5,null,7]
 * 输出：[1,#,2,3,#,4,5,7,#]
 * 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数小于 6000
 * -100 <= node.val <= 100
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  // 思路： 以 N 层出发，去确定 N+1 层的 next 关系，始终维护一个变量确定 N+1 层最左边的节点。
  let node = root;
  while(node !== null) { // 如果找不到下一层最左边，也是下一层无节点了
    let level = node,
        leftMost = null; // 下一层的最左边节点
    while(level) { // 在第 N 层，处理 N+1 层。 一层一层处理
      if(level.left && level.right) {
        leftMost = leftMost || level.left; // 确定最左边节点
        level.left.next = level.right;
      } else {
        level.left && (leftMost = leftMost || level.left);
        level.right && (leftMost = leftMost || level.right);
      }
      
      if(level.next) {
        if(level.next.left) {
          if(level.right) {
            level.right.next = level.next.left;
          } else if (level.left) {
            level.left.next = level.next.left;
          } else if (leftMost) { // 这层的该节点不存在
            // 那么就从 leftMost 开始，根据 next 找到上一个需要设置 next 的节点
            let tmp = leftMost;
            while(tmp.next !== null) {
              tmp = tmp.next;
            }
            tmp.next = level.next.left
          }
        } else if(level.next.right) {
          if(level.right) {
            level.right.next = level.next.right;
          } else if (level.left) {
            level.left.next = level.next.right;
          } else if (leftMost) {
            let tmp = leftMost;
            while(tmp.next !== null) {
              tmp = tmp.next;
            }
            tmp.next = level.next.right;
          }
        }
      }

      level = level.next;
    }

    node = leftMost; // 下一层最左边节点
  }

  return root;
};
// @lc code=end

