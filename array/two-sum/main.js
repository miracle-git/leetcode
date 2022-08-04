export default {
  // 暴力破解
  byAC(nums = [], target) {
    const len = nums.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
    return []
  },
  // 利用Map
  byMap(nums = [], target) {
    const len = nums.length
    const map = new Map()
    for (let i = 0; i < len; i++) {
      const key = target - nums[i]
      if (map.has(key)) {
        return [map.get(key), i]
      }
      map.set(nums[i], i)
    }
    return []
  },
  // 利用Map(优化)
  byMapOptimize(nums = [], target) {
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
}
