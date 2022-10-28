// 最终版
export default function twoSum(nums, target) {
  const len = nums.length
  // 边界检查
  if (len <= 1) return []
  let map = new Map()
  map.set(nums[0], 0)
  for (let i = 1; i < len; i++) {
    const cur = nums[i]
    const key = target - cur
    if (map.has(key)) {
      const val = map.get(key)
      // 清空当前Map，优化内存
      map = null
      return [val, i]
    }
    map.set(cur, i)
  }
  return []
}
