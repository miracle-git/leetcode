// 最终版
export default function twoSum(nums, target) {
  const len = nums.length
  if (len < 2) {
    return []
  }
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    const key = target - cur
    if (map.has(key)) {
      const val = map.get(key)
      return [val, i]
    }
    map.set(cur, i)
  }
  return []
}
