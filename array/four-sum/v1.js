export default function fourSum(nums, target) {
   const len = nums.length, res = []
  // 优先对数组进行排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 1; i++) {
    // 已经查找过的数则直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len; j++) {
      if (i + 1 < j && nums[j] === nums[j - 1]) continue
      // 定义左右指针(左指针指向第一个数而不是第0个，因为第0个数为target)
      let start = j + 1, end = len - 1
      while (start < end) {
        const sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum === target) {
          if (j + 1 < start && nums[start] === nums[start - 1]) {
            start++
            continue
          }
          res.push([nums[i], nums[j], nums[start], nums[end]])
          start++
        } else if (sum > target) {
          end--
        } else {
          start++
        }
      }
    }
  }
  return res
}
