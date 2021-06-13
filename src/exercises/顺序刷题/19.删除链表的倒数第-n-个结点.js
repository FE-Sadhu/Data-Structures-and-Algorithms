/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (42.01%)
 * Likes:    1407
 * Dislikes: 0
 * Total Accepted:    408.4K
 * Total Submissions: 971.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 快慢指针
  /*
  var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head),
        slow = fast = ret;
    while(n--) fast = fast.next;
    if(!fast) return ret.next;
    while (fast.next) {
        fast = fast.next; 
        slow = slow.next
    };
    slow.next = slow.next.next;
    return ret.next;
  };
  */

  const dummyHead = new ListNode(null, head);
  const len = getLengthByHead(head);

  if (len - n <= 0) {
    return dummyHead.next.next;
  }

  let a = dummyHead.next;
  let count = 0;
  while(a) {
    if (len - count === n + 1) {
      a.next = a.next.next;
      break;
    }
    count++;
    a = a.next;
  }
  return dummyHead.next;
};

function getLengthByHead(head) {
  let len = 0;
  while(head) {
    len++;
    head = head.next;
  }
  return len;
}
// @lc code=end

