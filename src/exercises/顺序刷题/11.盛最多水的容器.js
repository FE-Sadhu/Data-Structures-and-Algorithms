/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (61.73%)
 * Likes:    1189
 * Dislikes: 0
 * Total Accepted:    153.1K
 * Total Submissions: 247.6K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 木桶效应为基础，这题解面积的公式始终是： 宽 * (短端)高
  // 设个双指针 s, e 指向首尾。
  // 关键点是： 
  // 移动短端，面积可能变大，
  // 移动长端，面积只可能变小。
  // 再用一个 res 取最大值就行。

  let res = 0,
      s = 0,
      e = height.length - 1;
  
  while(s < e) {
    let area = (e - s) * Math.min(height[s], height[e]);
    res = Math.max(res, area);
    if (height[s] < height[e]) {
      s++;
    } else {
      e--;
    }
  }
  
  return res;
};
// @lc code=end

