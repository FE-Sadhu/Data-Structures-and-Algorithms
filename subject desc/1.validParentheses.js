/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 */

 
/**
 * 思路要清晰：以栈的方式去判断。
 * 1. 若为左半边的括号，则入栈。
 * 2. 遇到右半边括号时，分类讨论：
 *  2.1 若此时栈为空，则返回 false。
 *  2.2 若此时栈顶元素不为对应的左半边括号，则返回 false
 *  2.3 若此时栈顶元素为对应的左半边括号，左半边括号出栈
 */


function isValid(s) {
  let valid = true
  const stack = []
  const mapper = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let i in s) {
    const v = s[i]
    if (['(', '{', '['].indexOf(v) > -1) {
      stack.push(v);
    } else {
      const peak = stack.pop()
      if (v !== mapper[peak]) {
        return false
      }
    }
  }

  if (stack.length > 0) return false

  return valid
}