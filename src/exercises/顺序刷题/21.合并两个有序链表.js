/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (60.18%)
 * Likes:    1142
 * Dislikes: 0
 * Total Accepted:    307.7K
 * Total Submissions: 486.8K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 归并法
    const dummy = new ListNode(-1);
    let dummyHelper = dummy;

    while(l1 && l2) {
        if (l1.val <= l2.val) {
            dummyHelper.next = l1;
            l1 = l1.next;
            dummyHelper = dummyHelper.next;
        } else {
            dummyHelper.next = l2;
            l2 = l2.next;
            dummyHelper = dummyHelper.next;
        }
    }
    if (!l1) dummyHelper.next = l2;
    if (!l2) dummyHelper.next = l1;
    return dummy.next;

    // 递归
    // 定义: 定义个递归函数 f(l1, l2),返回合并后的新链表。
    // 出口: !l1, !l2 分别返回 l2, l1；
    // if (!l1) return l2;
    // if (!l2) return l1;

    // if (l1.val <= l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }
};
// @lc code=end

