/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (74.25%)
 * Likes:    773
 * Dislikes: 0
 * Total Accepted:    148.4K
 * Total Submissions: 194.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // 排列组合，都用回溯算法 => 多叉树（决策树）的遍历问题
  const result = [],
        road = [];
  function backTrack(road, chooses) {
    if (!chooses.length) {
      result.push(road.slice()); // 拷贝一份存入 res。
      return;
    }

    for(let val of chooses) {
      // 做选择 -> 1.把该选择加入路径、2.把该选择从待选择列表删除
      road.push(val);
      let index = chooses.indexOf(val);
      chooses.splice(index, 1);
      backTrack(road, chooses);
      // 撤销选择
      road.pop(); // 把选择从路径里删了
      chooses.splice(index, 0, val); // 加入待选择列表
    }
  }
  backTrack(road, nums);
  return result;
};
// @lc code=end


