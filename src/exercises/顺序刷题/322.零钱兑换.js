/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (37.95%)
 * Likes:    692
 * Dislikes: 0
 * Total Accepted:    100.7K
 * Total Submissions: 250.3K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  /*  dp 自顶向下;
  // base case: amount === 0 时，硬币数最少为 0。
  // 状态: amount 
  // 选择: for coin of coins
  // dp 函数定义：dp(amount) => 当总金额 amount 时，最少需要 dp(amount) 个硬币组成。
  let cache = {}; // 备忘录优化
  function dp(n) {
    if(cache[n]) return cache[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity;
    for(let coin of coins) {
      let tmp = dp(n - coin);
      if (tmp === -1) continue; // 跳过无解的子问题
      res = Math.min(res, 1 + tmp);
    }
    // 所有选择中，一个都凑不出来的话，就会一直 continue，res 就为无穷大
    cache[n] = Number.isFinite(res) ? res : -1;
    return cache[n];
  }
  return dp(amount);
  // 时间复杂度: O(n*硬币数量)，剪枝后无重叠子问题。
  // 空间复杂度: O(n), 备忘录内存不断增加。
  */

  /* dp 自底而上 */
  // base case, 状态, 选择和自顶而下一样。
  // dp 数组的定义: 当面额为 i 时，最少需要 dp[i] 个硬币。
  const dp = new Array(amount+1).fill(amount + 1); // 以 amount+1 作为无穷大
  dp[0] = 0; // base case
  for(let i = 0; i < amount + 1; i++) {
    for(let coin of coins) {
      if ((i - coin) < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
  // 这种解法与 dp 自顶而下相比，无重叠子问题，直接从 base case dp[0] 一步步求到 dp[amount]
};
// @lc code=end

