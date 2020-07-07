/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.30%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    61.9K
 * Total Submissions: 92.9K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // 0, 1, 1, 2, 3, 5, 8...
  // 法一：递归+备忘录（剪递归树的枝，递归完后的备忘录就是 DP table
  // const cache = {
  //   0: 0,
  //   1: 1
  // };
  // function helper(N) {
  //   if (cache[N] >= 0) return cache[N];
  //   var res = helper(N - 1) + helper(N - 2);
  //   cache[N] = res;
  //   return res;
  // }
  // return helper(N);
  // 时间复杂度: O(n); 递归子问题个数 * 每个子问题执行所需时间
  // 空间复杂度: O(n);

  // 法二：动态规划 + 优化的 DP table
  // base case: f(0) = 0,f(1) = 1;
  // 状态转移方程: f(n) = f(n - 1) + f(n - 2); n >= 2 时;
  if (N < 2) return N;
  let first = 0,
      second = 1,
      sum;
  for(let i = 2; i <= N; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return second;
  // 时间复杂度: O(n);
  // 空间复杂度: O(1);
};
// @lc code=end

