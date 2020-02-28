/**
 * 链表
 * 链表中的成员是一个个节点(node)，每个节点包含节点本身 + 指向下一个节点的引用
 * node.next === 下一个节点
 * 最后一个节点的 next 属性指向 null
 * 
 * 相对数组类数据结构的特点是 -> 可以很方便地在链表任意一处进行增删改节点。
 * 
 * 设计 9 个方法：
 *  append(element) 往链表尾部添加节点
 *  insert(element, position) 往哪个位置插入节点,插入成功返回 true,失败 false
 *  removeAt(position) 删除哪个位置的节点,返回该节点的值
 *  remove(element) 删除哪个节点，返回该节点的值
 *  indexOf(element) 返回元素在链表中的索引，无则返回 -1
 *  isEmpty()
 *  size()
 *  getHead() 返回链表第一个节点
 *  toString() 返回链表的每个节点的 element 信息
 */

export class LinkNode {
  constructor(element) {
    this.element = element
    this.next = null // 默认指向 Null
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0; // 链表长度
    this.head = null; // 指针，初始指向 null
  }

  append(element) {
    // 如果链表里没节点
    const Node = new LinkNode(element)

    if (this.head === null) {
      this.head = Node
    } else { // 链表里有节点
      let current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = Node
    }

    this.length++
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
      previous,
      index = 0

      if (position === 0) {
        this.head = current.next
      } else {
        while(index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
      }

      this.length--
      return current.element
    } else {
      return null
    }
  }

  remove(element) { // 利用下面的 indexOf() 方法
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  insert(position, element) {
    if (position > -1 && position <= this.length) { // 添加的索引是否越界
      const Node = new LinkNode(element)
      let current = this.head,
      previous,
      index = 0

      if (position === 0) {
        this.head = Node
        Node.next = current
      }else {
        while(index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = Node
        Node.next = current
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  toString() {
    let res = '',
    current = this.head

    while(current) {
      res += current.element + (current.next ? ',' : '.')
      current = current.next
    }

    return res
  }

  indexOf(element) {
    let current = this.head,
    index = 0

    while(current) {
      if(current.element === element) {
        return index
      }
      index++
      current = current.next
    }

    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head
  }
}

/**
 * 测试 append()
 */
// let list = new LinkedList()
// console.log(list)
// list.append(15)
// console.log(list)
// list.append(10)
// console.log(list)

/**
 * 测试 removeAt()
 */
// let list2 = new LinkedList()
// console.log(list2)
// list2.append(1)
// console.log(list2)
// console.log(list2.removeAt(0))
// console.log(list2)
// list2.append(1)
// list2.append(2)
// list2.append(3)
// console.log(list2.removeAt(1))
// console.log(list2)
// console.log(list2.removeAt(1))
// console.log(list2)
// console.log(list2.removeAt(0))
// console.log(list2)

/**
 * 测试 toString()
 */
// let list3 = new LinkedList()
// list3.append(1)
// list3.append(2)
// list3.append(3)
// console.log(list3.toString())

/**
 * 测试 indexOf()
 */

// let list4 = new LinkedList()
// list4.append(1)
// list4.append(2)
// list4.append(3)
// console.log(list4.indexOf(1))
// console.log(list4.indexOf(2))
// console.log(list4.indexOf(3))
// console.log(list4.indexOf(4))