/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (67.91%)
 * Likes:    1072
 * Dislikes: 0
 * Total Accepted:    273.5K
 * Total Submissions: 392.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 法一：迭代
  let prev = null,
      curr = head;
  
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
  // 时间复杂度: O(n);
  // 空间复杂度: O(1);

  // 法二：递归 (修改原链表)
  /*
  if (!head || !head.next) return head;
  let reversed = reverseList(head.next);
  let helper = reversed;

  while(helper.next) {
    helper = helper.next;
  }
  helper.next = head;
  helper.next.next = null;

  return reversed;
  */

  // 法三：迭代，空间换时间。（返回一个新链表）
  /*
  const tmp = [],
        dummyHead = new ListNode(-1);
  let helper = dummyHead;

  while(head) {
    tmp.unshift(head);
    head = head.next;
  }

  while(tmp.length) {
    helper.next = tmp.shift();
    helper = helper.next;
  }
  helper.next = null;
  
  return dummyHead.next;
  */
};
// @lc code=end

