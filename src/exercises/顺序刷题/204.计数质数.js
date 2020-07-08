/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (32.63%)
 * Likes:    379
 * Dislikes: 0
 * Total Accepted:    64K
 * Total Submissions: 187K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // 方法一: 常规思路
  // 时间复杂度: O(n*sqrt(n))
  /*
  if (n === 0 || n === 1) return 0;
  // 质数,素数就是因子只有 1 和自身。
  let count = 0,
      judge = []; // 里面存 n 以下的每个素数的倍数
  for(let i = 2; i < n; i++) {
    if(isPrime(i)) count++;
  }

  function isPrime(val) {
    //  [2,sqrt(val)] 这个区间之内没有发现可整除因子，就可以直接断定 val 是素数了
    for(let j = 2; j <= Math.sqrt(val); j++) { 
      if (val % j === 0) return false;
    }
    return true;
  }
  return count;
  */

  // 方法二: 关键 -> 素数的倍数一定不是素数，从素数 2 开始算起。
  let arr = new Array(n);
  let count = 0;

  for(let i = 2; i < n; i++) {
    if (!arr[i]) { // 为质数
      count++;
      for(let j = 2 * i; j < n; j += i) {
        arr[j] = true;
      }
    }
  }

  return count;
};
// @lc code=end

