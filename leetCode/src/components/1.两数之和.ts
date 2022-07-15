/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let len: number = nums.length;
  if (len > 1) {
    let map: Map<number, any> = new Map()
    for (let i = 0; i < len; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
        return [map.get(diff), i]
      }
      map.set(nums[i], i)
    }
  }
  return []
};
// @lc code=end

