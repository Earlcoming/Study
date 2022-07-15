/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const n = Number(x.toString().split('').reverse().join(''));
  return n === x
};
// @lc code=end

