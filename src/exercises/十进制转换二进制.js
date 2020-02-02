import Stack from '../core/Stack'

function divideBy2(decNumber) {
  const stack = new Stack()
  let res = ''

  while(decNumber > 0) {
    let rem = decNumber % 2
    stack.push(rem) // 余数入栈
    decNumber = Math.floor(decNumber / 2)
  }
  while(!stack.isEmpty()) {
    res += stack.pop()
  }
  
  return res
}

export default divideBy2