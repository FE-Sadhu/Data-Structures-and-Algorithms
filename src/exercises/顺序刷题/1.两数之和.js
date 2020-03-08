/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 暴力
  // for (let i = 0; i < nums.length; i++) {
  //   for(let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // 时间复杂度： O(n^2)，空间复杂度: O(1);

  // 哈希表
  const cache = {};
  for(let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (rest in cache) {
      return [i, cache[rest]]
    }
    cache[nums[i]] = i;
  }
  // 空间换时间，只有一层遍历
  // O(n), O(n)
};
// @lc code=end

