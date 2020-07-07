/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (44.20%)
 * Likes:    808
 * Dislikes: 0
 * Total Accepted:    113.1K
 * Total Submissions: 252.9K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // dp[i]定义: 当一个数字是 nums[i] 时，dp[i] 表示以 nums[i] 结尾的最大上升长度。
  // base case: dp[i] 的最小值肯定是 1，子序列中每个数本身算一个。
  if(!nums.length) return 0;
  const dp = new Array(nums.length).fill(1);

  for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }

  return dp.reduce((a, b) => {
      return Math.max(a, b);
  })
};
// @lc code=end

