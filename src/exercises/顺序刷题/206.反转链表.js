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
  // 法一：返回新链表
  /*
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let helper = dummyHead.next;

  function moveToFirst(node) {
    let oldHead = dummyHead.next;
    dummyHead.next = node;
    node.next = oldHead;
  }
  while(helper) {
    moveToFirst(helper);
    helper = helper.next;
  }
  return dummyHead.next;
  */

  // 递归
  if (!head || !head.next) return head;
  let reversed = reverseList(head.next);
  let helper = reversed;

  while(helper.next) {
    helper = helper.next;
  }
  helper.next = head;
  helper.next.next = null;

  return reversed;
};
// @lc code=end

