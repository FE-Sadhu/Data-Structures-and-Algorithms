/**
 * 栈 -> 先进后出
 * 拥有 push pop peek isEmpty clear size print 方法
 */

const items = new WeakMap(); // 创造私有变量，实例的弱引用，访问不到，并且不计入垃圾回收机制，实例删除就清空 weakmap 键值对

class Stack {
  constructor() {
    items.set(this, [])
  }
  push(val) {
    items.get(this).push(val)
  }
  pop() {
    return items.get(this).pop()
  }
  peek() { // 查看栈顶元素
    const arr = items.get(this)
    return arr[arr.length - 1]
  }
  isEmpty() {
    return items.get(this).length === 0
  }
  clear() {
    items.set(this, [])
  }
  size() {
    return items.get(this).length
  }
  print() {
    console.log(items.get(this).join(' '))
  }
}

export default Stack