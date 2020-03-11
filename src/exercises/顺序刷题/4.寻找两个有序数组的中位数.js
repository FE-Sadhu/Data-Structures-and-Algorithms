// @ts-nocheck
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (37.04%)
 * Likes:    2270
 * Dislikes: 0
 * Total Accepted:    155.1K
 * Total Submissions: 418.4K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length,
      n = nums2.length;
  let length = m + n;
  let k; // 第几个数为中位数
  if (length % 2 !== 0 ) {
    k = Math.ceil(length / 2); // 第 k 个数就是中位数
    return findKth(nums1, 0, nums2, 0, k);
  } else {
    k = length / 2;
    return (findKth(nums1, 0, nums2, 0, k) + findKth(nums1, 0, nums2, 0, k + 1)) / 2
  }

  function findKth(nums1, left1, nums2, left2, k) {
    if (!nums1.length) return nums2[k - 1]; // 索引
    if (!nums2.length) return nums1[k - 1];
    if (k === 1) return Math.min(nums1[left1], nums2[left2]);
    let mid = Math.floor(k / 2); // 划分两个数组
    if (mid > nums1.length) {
      mid = nums1.length;
    }
    if (mid > nums2.length) {
      mid = nums2.length;
    }
    left1 += mid - 1; // 索引
    left2 += mid - 1;
    if (nums1[left1] > nums2[left2]) {
      return findKth(nums1, 0, nums2.slice(left2 + 1), 0, k - mid)
    } else {
      return findKth(nums1.slice(left1 + 1), 0, nums2, 0, k - mid)
    }
  } 
};
// @lc code=end

