export default function majorityNumber(nums = []) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}