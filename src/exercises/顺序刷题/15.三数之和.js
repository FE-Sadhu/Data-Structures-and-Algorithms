/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (25.87%)
 * Likes:    1895
 * Dislikes: 0
 * Total Accepted:    174.2K
 * Total Submissions: 671.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 限定： 结果的数组的各个子数组是 unique 的，关键在去重。
  // 大致思路：
  // 先排序数组。
  // 设每一项为 i ，两个指针 s(start), e(end). s = i + 1, e = len - 1;
  // 当 i + s + e < 0 时，代表 s 小了，s 取大一点的值再加，也就是 s++；
  // 当 i + s + e > 0 是，代表 e 大了，e 要取小一点的值， e--；
  // 当 i + s + e == 0 时，添加此时结果，同时 s++, e--,看还能取不。

  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) { // 遍历完倒数第三个就结束，因为 s 要和 e 重合了
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let s = i + 1,
          e = nums.length - 1;
      
      while(s < e) {
        if (nums[i] + nums[s] + nums[e] < 0) {
          s++;
        } else if (nums[i] + nums[s] + nums[e] > 0) {
          e--;
        } else { // 等于 target 0 的情况
          res.push([nums[i], nums[s], nums[e]]);
          s++;
          e--;
          while(s < e && nums[s] === nums[s - 1]) { // 去重
            s++;
          }
          while(s < e && nums[e] === nums[e + 1]) { // 去重
            e--;
          }
        }
      }
    }
  }

  return res;

  // 时间复杂度： O(n^2);
};
// @lc code=end

