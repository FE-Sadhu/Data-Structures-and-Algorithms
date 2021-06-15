/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (49.32%)
 * Likes:    419
 * Dislikes: 0
 * Total Accepted:    59.4K
 * Total Submissions: 117.2K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  /** 
  let count = 1,
      dummyHead = new ListNode(-1);
      dummyHead.next = head;

  let startReverse = dummyHead.next,
      beforeStart = dummyHead,
      cur = dummyHead.next,
      afterCur = cur.next;

  while(count < n) {
    if (count >= m) {
      let next = afterCur.next;
      afterCur.next = cur;
      cur = afterCur;
      afterCur = next;
      count++;
      continue;
    }

    count++;
    beforeStart = startReverse;
    startReverse = startReverse.next;
    cur = afterCur;
    afterCur = afterCur.next;
  }

  beforeStart.next = cur;
  startReverse.next = afterCur;
  
  return dummyHead.next;
  */
  const dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < m - 1; ++i) {
      pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < n - m; ++i) {
      const next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
  }
  return dummy.next;
};
// @lc code=end

