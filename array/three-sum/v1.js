export default function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []

  for (let i = 0, len = nums.length; i < len - 1; i++) {
    const target = nums[i]
    if (i > 0 && target === nums[i - 1]) continue
    for (let l = i + 1, r = len - 1; l < r;) {
      const left = nums[l], right = nums[r]
      const sum = left + right + target
      if (sum) {
        sum < 0 ? l++ : r--
      } else {
        res.push([target, left, right])
        l++
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return res
}
