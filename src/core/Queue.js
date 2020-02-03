/**
 * 普通队列
 * feature: 先进先出
 * method: enqueue(入队)、dequeue(出队)、front(查看队头)、isEmpty、size
 */
const items = new WeakMap()

export class Queue {
  constructor() {
    items.set(this, [])
  }
  enqueue(val) {
    items.get(this).push(val)
  }
  dequeue() {
    return items.get(this).shift()
  }
  front() {
    return items.get(this)[0]
  }
  isEmpty() {
    return items.get(this).length === 0
  }
  size() {
    return items.get(this).length
  }
}

/**
 * 最小优先队列
 * (类似急诊室先让更严重的病人入队列一样)
 * 定个优先级就行，在队列里，优先级高的(priority 值小的)排在前面
 */

class QueueElement { // 添加优先级,生成特殊元素,是特殊元素入队列
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

const items2 = new WeakMap()
export class PriorityQueue {
  constructor() {
    items2.set(this, [])
  }
  enqueue(val, priority) {
    let priorityElement = new QueueElement(val, priority) // 生成带优先级的特殊元素
    const queue = items2.get(this)
    let added = false

    for(let i = 0; i < queue.length; i++) {
      if (priorityElement.priority < queue[i].priority) {
        queue.splice(i, 0, priorityElement)
        added = true
        break
      }
    }

    if (!added) {
      queue.push(priorityElement)
    }

  }

  dequeue() {
    return items2.get(this).shift()
  }

  front() {
    let first = items2.get(this)[0]
    return `${first.element} 优先级 -> ${first.priority}`
  }

  isEmpty() {
    return items.get(this).length === 0
  }

  size() {
    return items.get(this).length
  }
}

