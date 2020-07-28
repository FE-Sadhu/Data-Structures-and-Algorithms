/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (45.08%)
 * Likes:    325
 * Dislikes: 0
 * Total Accepted:    43.4K
 * Total Submissions: 84.6K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 示例: 
 * 
 * 你可以将以下二叉树：
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠    / \
 * ⁠   4   5
 * 
 * 序列化为 "[1,2,3,null,null,4,5]"
 * 
 * 提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 
 * 说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return '[]';
    let q = [root, null],
        res = [root.val];
        node = null;

    while((node = q.shift()) !== undefined) {
      if(node === null) {
        if(!q.length) {
          break;
        }
        q.push(null);
        continue;
      }
      res.push(node.left ? node.left.val : null);
      res.push(node.right ? node.right.val : null);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    
    while(typeof res[res.length - 1] !== 'number') {
      res.pop();
    }

    return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // '[1, 2, null, 3]' ==> [1, 2, null, 3]
  data = JSON.parse(data);
  if(!data.length) return null;

  const root = new TreeNode(data[0]);
  // 指针
  let point = 1;
      queue = [root]; 
      
  
  while(point < data.length) {
    const root = queue.shift(); // 爸爸出列

    if(data[point] !== null && data[point] !== undefined) { // 左孩子
      const left = new TreeNode(data[point]);
      root.left = left;
      queue.push(left); // 未来的爸爸入队列
    }
    if (data[point + 1] !== null && data[point + 1] !== undefined) { // 右孩子
      const right = new TreeNode(data[point + 1]);
      root.right = right;
      queue.push(right); // 未来的爸爸入列
    }

    point += 2;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

