export default function findMedianSortedArray(nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = merge.length, pos = Math.floor(len / 2)
  return len % 2 ? merge[pos] : (merge[pos - 1] + merge[pos]) / 2
}
