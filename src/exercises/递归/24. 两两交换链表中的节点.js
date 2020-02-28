/* 题目

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
*/

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

// 递归
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  var second = head.next;
  head.next = swapPairs(head.next.next);
  second.next = head;
  return second;
}

// 迭代
var swapPairs1 = function(head) {
  // 利用虚拟头节点做一次缓存，输出出去的就是虚拟头节点
  const res = new ListNode(null);
  res.next = head
  var p = res; // 按引用传递
  while(p.next && p.next.next) {
    var a = p.next,
        b = a.next,
        next = b.next;
    b.next = a;
    a.next = next;
    p.next = b; // 因为 p 是按引用传递的，第一次循环中执行到这里时等同于是 res.next = b;
    p = b.next; // 覆盖引用
  }
  return res.next;
}