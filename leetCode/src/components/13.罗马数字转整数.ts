/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  let count = 0;
  // 常规罗马
  const romanNum: any = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  //特殊罗马字符
  const specish: any = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  for (let key in specish) {
    if (s.includes(key)) {
      // console.log(key)
      count += specish[key]
      s = s.replace(key, '')
    }
  }
  // console.log(s, '=====')
  if (s.length > 0) {
    for (let rom of s) {
      count += romanNum[rom]
    }
  }
  return count

};
// @lc code=end

