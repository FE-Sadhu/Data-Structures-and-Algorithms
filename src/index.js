/**
 * 1. 测试 Stack 类
 */
/*
import Stack from './core/Stack'

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log('test push:') 
stack.print() // 1 2 3 4
stack.pop()
console.log('test pop:')
stack.print() // 1 2 3
console.log('test peek:')
console.log(stack.peek()) // 3
console.log('test size:')
console.log(stack.size()) // 3
console.log('test isEmpty:')
console.log(stack.isEmpty())
console.log('test clear:')
stack.clear()
stack.print()
*/

/**
 * 2. 十进制转换二进制
 */
/*
import divideBy2 from './exercises/十进制转换二进制'

console.log(divideBy2(10))
console.log(divideBy2(233))
console.log(divideBy2(1000))
*/


/**
 * 汉诺塔
 */
/*
import hanoi from './exercises/汉诺塔'
console.log(hanoi(1, '起始柱子', '辅助柱子', '目标柱子'))
console.log('-------------------')
console.log(hanoi(2, '起始柱子', '辅助柱子', '目标柱子'))
console.log('-------------------')
console.log(hanoi(3, '起始柱子', '辅助柱子', '目标柱子'))
*/

/**
 * 击鼓传花(循环队列)
 */

// import { hotPotato } from './core/Queue'

// let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Cari']
// console.log(`胜利者是: ${hotPotato(names, 7)}`)

/**
 * 调试二叉搜索树的 search(key) 方法
 */

// import BinarySearchTree from './core/BST'

// const tree = new BinarySearchTree();
// tree.insert(11)
// tree.insert(7)
// tree.insert(15)
// tree.insert(5)
// tree.insert(9)
// tree.insert(13)
// tree.insert(16)
// tree.insert(8)
// tree.insert(18)

// // tree.levelTraverse((key) => {
// //   console.log(key)
// // })
// tree.levelTraverse((key) => {
//   console.log(key)
// })

/**
 * 调试 lc 24.
 */

// import Link, {LinkNode} from './core/LinkedList'

// const list = new Link()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)

// const swapPairs = function (head) {
//   let dummyHead = new LinkNode(null);
//   dummyHead.next = head;
//   let p = dummyHead;
//   while (p.next && p.next.next) {
//       let node1 = p.next,
//           node2 = p.next.next,
//           next = node2.next;
//       node2.next = node1;
//       node1.next = next;
//       p.next = node2;
//       p = node1
//   }
//   let list = dummyHead.next;
//   dummyHead = null;
//   return list
// };

// console.log(swapPairs(list.head))

/*
  test lc 106
*/
var buildTree = function(inorder, postorder) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
function helper (inorder, postorder, postEnd, inStart, inEnd) {
  if (inStart > inEnd) return null;
    
  let rootVal = postorder[postEnd];
  let root = new TreeNode(rootVal);
  
  let inOrderRootIndex = 0;
  for(let i = inStart; i <= inEnd; i++) {
    inorder[i] === rootVal && (inOrderRootIndex = i);
  }

  // root.left = helper(inorder, postorder, inOrderRootIndex - 1, inStart, inOrderRootIndex - 1); // 上面这个是错的
  root.left = helper(inorder, postorder, postEnd - (inEnd - inOrderRootIndex) - 1, inStart, inOrderRootIndex - 1);
  root.right = helper(inorder, postorder, postEnd - 1, inOrderRootIndex + 1, inEnd)

  return root;
}
return helper(inorder, postorder, postorder.length - 1, 0, inorder.length - 1);
};

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))