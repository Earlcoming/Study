/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length || strs.length === 0) return '';
  let str = '';
  for (let i = 0; i < strs.length; i++) {
    const strb = strs[0][i]
    for (let j = 0; j < strs[0].length; j++) {
      console.log(strs[i][j], strb, '====')
      if (strs[i][j] === strb) {
        str += strs[i][j]
      }
    }
  }
  return str
};

export default longestCommonPrefix
// @lc code=end

