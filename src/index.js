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

import BinarySearchTree from './core/BST'

const tree = new BinarySearchTree();
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(9)
tree.insert(13)
tree.insert(16)
tree.insert(8)
tree.insert(18)

// tree.levelTraverse((key) => {
//   console.log(key)
// })
tree.levelTraverse((key) => {
  console.log(key)
})
