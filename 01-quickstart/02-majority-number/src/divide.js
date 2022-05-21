function countInRange(nums, item, start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (nums[i] === item) {
      count++
    }
  }
  return count++
}

function majorityNumberRec(nums, start, end) {
  // 如果只有一个元素，则直接返回
  if (start === end) return nums[start]
  // 将数组拆分为两部分
  const mid = Math.floor((end - start) / 2 + start)
  const left = majorityNumberRec(nums, start, mid)
  const right = majorityNumberRec(nums, mid + 1, end)
  // 如果递归查找，发现相同，则直接返回
  if (left === right) return left
  // 否则继续递归，直到找到为止
  const leftCount = countInRange(nums, left, start, end)
  const rightCount = countInRange(nums, right, start, end)
  // 比对查找数量，谁更大则返回谁
  return leftCount > rightCount ? left : right
}

export default function majorityNumber(nums = []) {
  return majorityNumberRec(nums, 0, nums.length - 1)
}
