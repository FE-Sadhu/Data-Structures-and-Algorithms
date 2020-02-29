// 递归
var reverseList = function(head) {
  if (!head || !head.next) return head;
  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

// 迭代
var reverseList = function(head) {
  var pre = null,
      curr = head;
  while(curr) {
      var next = curr.next; // 得先缓存起来，不然交换完就断了连接
      curr.next = pre;
      pre = curr;
      curr = next;
  }
  return pre;
}