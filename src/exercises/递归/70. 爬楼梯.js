/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 方式一 迭代+拓展数组
  // const cache = [0, 1, 2];
  // for (let i = 3; i<=n; i++) {
  //     cache[i] = cache[i-1] + cache[i-2];
  // }
  // return cache[n];
  
  // 方式二 递归
  // const cache = [0, 1, 2];
  // function helper(n) {
  //     if (cache[n]) return cache[n];
  //     const res = helper(n-1) + helper(n-2);
  //     cache[n] = res;
  //     return res;
  // }
  // return helper(n)
  
  // 方式三 迭代+动态规划数组
  // if( n <= 2) return n;
  // const cache = [1, 2];
  // for(let i = 3; i<=n; i++) {
  //     cache.push(cache.shift() + cache[0]);
  // }
  // return cache[1];
  
  // 方式四 不用数组，动态规划变量
  if( n <= 2) return n;
  let a = 1,
      b = 2,
      res;
  for (let i = 3; i <= n; i++) {
      res = a + b;
      a = b;
      b = res;
  }
  return res;
};