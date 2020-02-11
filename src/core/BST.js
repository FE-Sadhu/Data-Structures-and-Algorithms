/**
 * 二叉搜索树
 * 特点 -> 每个节点只有两个子节点(二叉)，左子节点总是比父节点小，右子节点总是比父节点大
 * 
 * 方法：
 * insert(key) 向树中插入一个新的键
 * search(key) 在树中查找一个键，如果节点存在，则返回 true,不存在则 false
 * inOrderTraverse(callback): 通过中序遍历方式遍历所有节点，callback 是用户定义的对遍历出的每个键做出的处理
 * preOrderTraverse(callback): 通过先序遍历方式遍历所有节点
 * postOrderTraverse(callback): 通过后序遍历方式遍历所有节点
 * levelTraverse(callback): 层序遍历 (广度优先遍历)
 * min(): 返回树中最小的键
 * max(): 返回树中最大的键
 * remove(key): 从树中删除某个键
 */

// 辅助节点类
class TreeNode {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null // 创建个变量代表根节点，类似链表中的 head 变量代表头节点
  }
  
  // 往二叉搜索树中插入键
  insert(key) {
    const Node = new TreeNode(key)
    
    if (this.root === null) {
      this.root = Node
    } else {
      insertNode(this.root, Node)
    }

    function insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
  }

  // 二叉搜索树的中序遍历 -> 左根右 (从小到大)
  inOrderTraverse(callback) {
    // 这个函数的目的是 -> 对参数 node 节点进行 callback 处理
    function inOrderTraverseNode(node, callback) {
      if(node !== null) {
        inOrderTraverseNode(node.left, callback) // 由于是先序，先对该节点的左子节点做处理
        callback(node) // 然后对本节点做处理
        inOrderTraverseNode(node.right, callback) // 最后对右子节点做处理
      }
    }

    inOrderTraverseNode(this.root, callback)
  }

  // 先序遍历 -> 根左右
  preOrderTraverse(callback) {
    function preOrderTraverseNode(node, callback) {
      if(node !== null) {
        callback(node)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }

    preOrderTraverseNode(this.root, callback)
  }

  // 后序遍历 -> 左右根
  postOrderTraverse(callback) {
    function postOrderTraverseNode(node, callback) {
      if(node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node)
      }
    }

    postOrderTraverseNode(this.root, callback)
  }

  // 广度优先遍历
  levelTraverse(callback) {
    let queue = []
    let node = this.root
    queue.push(node)
    
    while(queue.length) {
      node = queue.shift()
      callback(node.key)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  // 搜索树中的最小值
  min() {
    let node = this.root
    if (node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    } else {
      return null
    }
  }

  // 搜索树中的最大值

  max() {
    let node = this.root
    if (node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    } else {
      return null
    }
  }

  search(key) {
    // 这个函数的目的是对比节点与 key 是否相等
    function searchNode(node, key) {
      if (node === null) {
        return false
      }
      if (key < node.key) {
        return searchNode(node.left, key)
      } else if (key > node.key) {
        return searchNode(node.right, key)
      } else {
        return true
      }
    }

    return searchNode(this.root, key)
  }

  remove(key) {
    this.root = removeNode(this.root, key)

    // 在 node 为根节点的树中找到与 key 相同的节点并删除
    // 返回删除后的以 node 为根节点的子树
    function removeNode(node, key) {
      if (node === null) {
        return null
      }

      if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
      }else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
      } else { // key === node.key
        if (node.left === null && node.right === null) { // case1: 叶节点
          node = null
          return node
        }
        
        if (node.left === null) { // case2: 只有一个子节点
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }

        // case3: 有两个子节点
        let minRight = findMinNode(node.right) // 找到替换的节点 -> 右子树中最小的节点
        node.key = minRight.key
        node.right = removeNode(node.right, minRight.key)
        return node
      }
    }

    function findMinNode(node) {
      while(node.left !== null) {
        node = node.left
      }
      return node
    }
  }
}

export default BinarySearchTree
/**
 * 测试
 */
// const tree = new BinarySearchTree();
// tree.insert(11)
// tree.insert(7)
// tree.insert(15)
// tree.insert(5)

// // // tree.inOrderTraverse(function(node) {
// // //   console.log(node.key)
// // // })

// // console.log(tree.search(5))
// tree.insert(9)
// tree.insert(13)
// tree.insert(16)
// tree.insert(8)
// tree.insert(18)

// tree.levelTraverse((key) => {
//   console.log(key)
// })