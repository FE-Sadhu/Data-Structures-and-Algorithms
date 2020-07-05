/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (43.24%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    81.5K
 * Total Submissions: 188K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 遍历有个 i，头尾两个指针 s、e。
  // 若 i + s + e < target，比较绝对值与 near 并更新，e--。
  // 若 i + s + e > target，比较绝对值与 near 并更新，i++。
  // 若 i + s + e === target，只存在唯一答案的话，直接返回 target。
  let near = Infinity,
      result;
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let s = i + 1,
        e = nums.length - 1;

    while(s < e) {
      let sum = nums[i] + nums[s] + nums[e]
      if (sum < target) {
        if (Math.abs(sum - target) < near) {
          near = Math.abs(sum - target);
          result = sum
        }
        s++;
      } else if (sum > target) {
        if (Math.abs(sum - target) < near) {
          near = Math.abs(sum - target);
          result = sum
        }
        e--;
      } else { // 相等自然最接近
        return target;
      }
    }
  }

  return result;
  // 时间复杂度: O(n^2);
  // 空间复杂度: O(logn), 排序需要的
};
// @lc code=end

