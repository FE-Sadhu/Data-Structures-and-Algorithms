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
