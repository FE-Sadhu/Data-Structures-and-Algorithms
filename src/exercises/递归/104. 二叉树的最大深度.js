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
  // 递归
  // 递归函数的定义：输入一个根节点，返回这根节点的最大深度。
  // 返回值： 当有该节点不存在时，返回 0 ，当该节点存在时，返回其左节点和右节点的深度比较的最大值加上 1，这个 1 代表当前节点的深度。（节点不为空了自然有深度 1）
  // 出口是，当这个节点为空时，返回 0 
  
  // if (!root) return 0;
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  
  // 迭代
  // BFS 广度优先遍历，每层输入个特殊字符 （NULL） 作为分界线，当遇到分界线时代表遍历完了一行，depth++
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
};