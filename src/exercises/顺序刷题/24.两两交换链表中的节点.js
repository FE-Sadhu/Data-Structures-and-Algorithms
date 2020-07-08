/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (64.68%)
 * Likes:    542
 * Dislikes: 0
 * Total Accepted:    121.3K
 * Total Submissions: 183.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
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
var swapPairs = function(head) {
  // 法一： 递归 + dummyHead
  /*
  const dummyHead = new ListNode(-1);
  let helper = dummyHead
  
  function help(a, b) {
    if (a && b) {
      let restList = b.next;
      helper.next = b;
      b.next = a;
      a.next = null;
      helper = a;
      if (restList !== null) {
        help(restList, restList.next)
      } else return;
    } else {
      a && (helper.next = a);
      // b && (helper.next = b);
      return;
    }
  }

  head && help(head, head.next);

  return dummyHead.next;
  */

  // 法二： 在原链表交换
  // 定义: 交换链表的头两个节点，返回交换后的原链表
  if(!head || !head.next) return head;

  let second = head.next;
  head.next = swapPairs(second.next);
  second.next = head;

  return second;
};
// @lc code=end

