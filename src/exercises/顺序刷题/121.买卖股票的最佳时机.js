/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (52.68%)
 * Likes:    834
 * Dislikes: 0
 * Total Accepted:    162.1K
 * Total Submissions: 302.4K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 暴力
  // let res = 0;
  // for(let i = 0; i < prices.length - 1; i++) { // 第一层遍历表示第几天买入股票（最后一天没必要买了，卖不出去）
  //   let max = 0;
  //   for(let j = i+1; j < prices.length; j++) { // 这层遍历表示第几天卖出
  //     let getMoney = prices[j] - prices[i];
  //     if (getMoney > max) {
  //       max = getMoney;
  //     }
  //   }
  //   max > res && (res = max);
  // }

  // return res;

  // 动态规划最小值，最大值
  let max = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  
  return max;
};
// @lc code=end

