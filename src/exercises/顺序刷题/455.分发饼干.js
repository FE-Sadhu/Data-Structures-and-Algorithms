/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 *
 * https://leetcode-cn.com/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (53.23%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    44K
 * Total Submissions: 80K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi
 * ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i
 * ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 
 * 注意：
 * 
 * 你可以假设胃口值为正。
 * 一个小朋友最多只能拥有一块饼干。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,3], [1,1]
 * 
 * 输出: 1
 * 
 * 解释: 
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2], [1,2,3]
 * 
 * 输出: 2
 * 
 * 解释: 
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 贪心：让孩子尽可能去吃，从胃口小的开始，吃到满足了再给下一个吃
  g.sort((a, b) => a - b); // 孩子胃口小 -> 大排列
  s.sort((a, b) => a - b); // 饼干尺寸小 > 大排列
  let res = 0,
      j = 0; // 孩子指针

  // 记住每人只分一个饼干
  for(let i = 0; i < s.length; i++) {
    if(j < g.length && g[j] <= s[i]) {
      res++; // 满足了一个
      j++; // 到下一个小朋友了
    }
    // 若 s[i] < g[j] ，不用担心浪费，因为每人只有一个饼干
    // 若是 s[i] 连 g[j] 都满足不了，更满足不了 g[j+1]。
  }

  return res;
};
// @lc code=end

