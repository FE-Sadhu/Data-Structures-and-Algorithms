/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (46.13%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    38K
 * Total Submissions: 82.2K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) -
 * 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 进阶:
 * 
 * 你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * 示例:
 * 
 * LRUCache cache = new LRUCache( 2 /* 缓存容量 */ ) 
 /*
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回  1
 * cache.put(3, 3);    // 该操作会使得密钥 2 作废
 * cache.get(2);       // 返回 -1 (未找到)
 * cache.put(4, 4);    // 该操作会使得密钥 1 作废
 * cache.get(1);       // 返回 -1 (未找到)
 * cache.get(3);       // 返回  3
 * cache.get(4);       // 返回  4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// 法一： 哈希表查询最快，双向链表插入删除最快，且有顺序。
function DoubleLinkList(k, v) {
  this.key = k;
  this.value = v;
  this.next = null;
  this.prev = null;
}

var LRUCache = function(capacity) {
  this.capacity = capacity; // 容量
  this.hashTable = {}; // 哈希表
  this.count = 0; // 目前存储量
  this.dummyHead = new DoubleLinkList(); // 假头
  this.dummyTail = new DoubleLinkList(); // 假尾
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
}

LRUCache.prototype.get = function(key) {
  if(this.hashTable[key]) {
    this.remove(this.hashTable[key]);
    this.insertToHead(this.hashTable[key]);
    return this.hashTable[key].value;
  } else {
    return -1;
  }
}

LRUCache.prototype.put = function(key, value) {
  const node = new DoubleLinkList(key, value);

  if(this.hashTable[key]) {
    this.remove(this.hashTable[key]);
    this.insertToHead(node);
    // this.hashTable[key] = node
  } else {
    if (this.count < this.capacity) {
      this.insertToHead(node);
      this.count++;
    } else {
      const rmNode = this.removeEnd(); // 删除链表中最后一个节点
      this.hashTable[rmNode.key] = null; // 这个节点对应的 hashTable 中的映射也要删
      this.insertToHead(node);
    }
  }
  
  this.hashTable[key] = node;
}

LRUCache.prototype.insertToHead = function(node) {
  node.prev = this.dummyHead;
  node.next = this.dummyHead.next;
  this.dummyHead.next = node;
  node.next.prev = node;
}

LRUCache.prototype.removeEnd = function () {
  // 删除链表最后一个节点并返回该节点
  let node = this.dummyTail.prev;
  this.dummyTail.prev.prev.next = this.dummyTail;
  this.dummyTail.prev = node.prev;
  // node.prev = null; 也可以断
  // node.next = null;
  return node;
}

LRUCache.prototype.remove = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  // node.next = null; 也可以断
  // node.prev = null;
  node = null;
}


/* 法二：投机取巧 => js 的 Map 是按插入顺序的。

var LRUCache = function(capacity) {
  this.cache = new Map();
  this.length = capacity;
};

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      let res = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, res); // 插入顺序排到后面
      return res;
  } else {
      return -1;
  }
};

LRUCache.prototype.put = function(key, value) {
  if(!this.cache.has(key) && this.cache.size >= this.length) {
      // for(let key of this.cache.keys()) {
      //     this.cache.delete(key);
      //     break;
      // }
      // 换个写法:
      this.cache.delete(this.cache.keys().next().value); // 删除 Map 里第一个
  }
  this.cache.has(key) && this.cache.delete(key);
  this.cache.set(key, value);
};
*/
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

