export default function singleNumber(nums = []) {
  return nums.reduce((r, s) => r ^= s, 0)
}
