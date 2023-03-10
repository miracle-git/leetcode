// 暴力破解
export default function twoSum(nums, target) {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}
