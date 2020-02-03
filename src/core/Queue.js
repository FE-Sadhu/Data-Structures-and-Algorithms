/**
 * 普通队列
 * feature: 先进先出
 * method: enqueue(入队)、dequeue(出队)、front(查看队头)、isEmpty、size
 */
const items = new WeakMap()

class Queue {
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