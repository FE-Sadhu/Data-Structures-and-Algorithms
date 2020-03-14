/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (49.59%)
 * Likes:    1709
 * Dislikes: 0
 * Total Accepted:    178.6K
 * Total Submissions: 359.4K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 要是连续的项的和，所以遍历是跑不了的。
  // 设一个变量 res 表示返回的结果，始终存最大的和的值。
  // 设一个变量 sum 表示遍历连续加的和。
  // 若 sum > 0, 表示对结果有增益，sum += i。
  // 若 sum <= 0,表示对结果无益，舍弃当前 sum ，sum 等于当前项 i;
  // res = Max(sum, res);
  
  let res = nums[0];
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i];
    }
    res = Math.max(sum, res);
  }
  return res;
};
// @lc code=end

