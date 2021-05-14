/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (52.50%)
 * Likes:    487
 * Dislikes: 0
 * Total Accepted:    194.8K
 * Total Submissions: 358.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？ [2, 4, 5]
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？[1, 5, 7, 7, 7]
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // 排序后双指针
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let l = 0, r = 0, ans = [];
  while (l < nums1.length && r < nums2.length) {
      if (nums1[l] === nums2[r]) {
          ans.push(nums1[l]);
          l++;
          r++;
      } else nums1[l] < nums2[r] ? l++ : r++;
  }
  return ans;

  // 暴力遍历  时间复杂度: O(n^2) 空间复杂度: O(n)
  // const len1 = nums1.length;
  // const len2 = nums2.length;
  // let less = null;
  // let more = null;
  // if (len1 < len2) {
  //   less = nums1;
  //   more = nums2;
  // } else {
  //   less = nums2;
  //   more = nums1;
  // }

  // const res = [];

  // for (let i = 0; i < less.length; i++) {
  //   let j = 0;
  //   while(j < more.length) {
  //     if (more[j] === less[i]) {
  //       res.push(more[j]);
  //       more.splice(j, 1); // 底层是链表，单纯删除 O(1)
  //       break;
  //     }
  //     j++
  //   }
  // }

  // return res;

  // 哈希表   时间复杂度: O(n), 空间复杂度: O(n);
  /** 
  const map = {};

  for (let i = 0; i < nums1.length; i++) {
      if (!map[nums1[i]]) {
          map[nums1[i]] = 1;
          continue;
      }
      map[nums1[i]]++
  }

  const res = [];
  for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] in map && map[nums2[i]]) {
          res.push(nums2[i]);
          map[nums2[i]]--;
      }

  }
  return res;
  */
};
// @lc code=end
