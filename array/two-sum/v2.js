// 利用Map
export default function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const key = target - nums[i]
    if (map.has(key)) {
      return [map.get(key), i]
    }
    map.set(nums[i], i)
  }
  return []
}
