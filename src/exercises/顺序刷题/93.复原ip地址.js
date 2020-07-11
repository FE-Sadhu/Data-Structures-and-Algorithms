/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.96%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    50.4K
 * Total Submissions: 107.4K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    // DFS 递归树为 四 层，因为 ip address 就四段。
    if (s.length < 4 && s.length > 12) return null;
    let res = [],
        layer = 1;

    function backTrack(road, s, layer) {
      // 结束条件
      if (layer > 4) {
        res.push(road.join(''));
        return;
      }

      // for (选择 in 选择列表)
      for(let i = 0; i < s.length; i++) {
        // 不合法的剪枝
        if (i > 2) break; // 每个 IP 段只能有三个数
        if (Number(s.substring(0, i + 1)) > 255) break; // 每段 ip 数不能大于 255
        if (s.substring(i + 1).length > (12 - layer * 3)) continue; // 不符合剩余位数最多情况
        if (s.substring(0, i + 1).length > 1 && s.substring(0, i + 1)[0] === '0') break; // 如："0.1.0.010" 010 不合法

        // 做合法的选择
        let item = s.substring(0, i + 1);
        layer === 4 ? road.push(item) : road.push(item + '.');
        s = s.replace(item, ''); // item 为 String 时，只匹配替换第一次符合的
        layer++;
        // 回溯
        backTrack(road, s, layer);
        // 撤销选择
        s = item + s;
        road.pop();
        layer--;
      }
    }

    backTrack([], s, layer);

    return res;
};
// @lc code=end

