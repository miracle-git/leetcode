export default function threeSumClosest(nums, target) {
  const len = nums.length
  let diff, sum, res
  // 优先对数组进行排序
  nums.sort((a, b) => a - b)
  // 三数之和，则i只需要循环到倒数第三个数即可
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1, k = len - 1; j < k;) {
      sum = nums[i] + nums[j] + nums[k]
      const abs = Math.abs(sum - target)
      if (isNaN(diff) || abs < diff) {
        diff = abs
        res = sum
      }
      if (sum > target) k--
      else if (sum < target) j++
      else break
    }
  }
  return res
}
