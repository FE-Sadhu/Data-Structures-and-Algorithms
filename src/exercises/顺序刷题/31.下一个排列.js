/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (32.92%)
 * Likes:    574
 * Dislikes: 0
 * Total Accepted:    74.5K
 * Total Submissions: 217.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sort(start, arr) {
  let len = arr.length
  while(start < len) {
    for (let i = start; i < len; i++) {
      if (arr[i + 1] < arr[i]) {
        swap(i + 1, i, arr)
      }
    }
    len--
  }
}

function swap(i, j, arr) {
  const swap = arr[i]
  arr[i] = arr[j]
  arr[j] = swap
}

var nextPermutation = function(nums) {
  const len = nums.length,
        flag = len - 1;
  let SIGN = true

  for (let i = flag; i > 0; i--) {
    // 从个位开始找，直到这位的数值大于前一位
    if (nums[i] <= nums[i - 1]) continue

    SIGN = false
    // 在之前 continue 过的数字中找到 比 前一位数值大 且 相对最小的数值。  2,4,3,1 -> 3
    let prev = nums[i - 1]
    let tmp = i
    let passMin = i // 维护目标值索引
    while(tmp < len) {
      if (nums[tmp] > prev) {
        (nums[tmp] < nums[passMin]) && (passMin = tmp)
      }
      tmp++
    }
    
    // 交换
    swap(i - 1, passMin, nums)

    // 把 continue 后的数字升序
    sort(i, nums)
    break // 只找一个
  }
  // 若本身就是降序数组，那么 reverse
  if (SIGN) {
    let s = 0
    let e = flag
    while(s <= e) {
      swap(s, e, nums)
      s++
      e--
    }
  }
  
};

// const input = [1,2,3]
// nextPermutation(input)
// @lc code=end

