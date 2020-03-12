/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (49.02%)
 * Likes:    914
 * Dislikes: 0
 * Total Accepted:    60.8K
 * Total Submissions: 123.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
// 方法一： 木桶效应
// 不要看整体，局部看，一个柱子一个柱子看。
// 对于每个柱子，找其 Max.min(左边最高柱子，右边最高柱子)。然后它能接多少水就是木桶较小端 - 自身高度。
// 当然，当它高度大于等于木桶短端，它自身自然接不了水。
// 当它高度小于木桶最短端，装的水就是最短端高度 - 自身高度

// let leftH = 0,
//     rightH = 0, // 左右端木板高度
//     res = 0;

// // 不包含首尾两端，因为首尾两端的最短木桶端都为 0，那漏水都漏完咯
// for(let i = 1; i < height.length - 1; i ++) {
//   // 找到左端最高
//   for(let l = i - 1; l >= 0; l--) {
//     if (height[l] >= leftH) {
//       leftH = height[l];
//     }
//   }

//   // 找到右端最高
//   for (let r = i + 1; r < height.length; r++) {
//     if (height[r] >= rightH) {
//       rightH = height[r];
//     }
//   }

//   // 找到木桶短板
//   let min = Math.min(leftH, rightH);

//   if (height[i] < min) {
//     res += min - height[i];
//   }

//   leftH = 0;
//   rightH = 0;
// }
// return res;
// 时间复杂度: O(n^2),空间复杂度 O(1);

// 方法二 空间换时间 -> 记录每个柱子的左右边最高值，避免嵌套循环。
let length = height.length,
    res = 0,
    maxLefts = [height[0]], // 左端最高集合
    maxRights = []; // 右端最高集合

maxRights[length - 1] = height[length - 1];

// 把 height 数组每个位置对应的左边最高放在 maxLefts 数组中
for(let i = 1; i < length; i++) {
  maxLefts[i] = Math.max(maxLefts[i - 1], height[i]);
}

// 把 height 数组每个位置对应的右边最高放在 maxRights 数组中
for(let i = length - 2; i >= 0; i--) {
  maxRights[i] = Math.max(maxRights[i + 1], height[i])
}

// 对每个柱子作木桶效应判断，当然首尾除外
for (let i = 1; i < length - 1; i++) {
  let leftH = maxLefts[i],
      rightH = maxRights[i];
  
  // 取木板短端
  let min = Math.min(leftH, rightH);

  if (height[i] < min) {
    res += min - height[i];
  }
}

return res;

// 时间复杂度 O(N),空间复杂度: O(n)
};
// @lc code=end

