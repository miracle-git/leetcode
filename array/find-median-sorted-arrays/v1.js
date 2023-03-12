export default function findMedianSortedArray(nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = merge.length, pos = Math.floor(len / 2)
  if (len % 2) return merge[pos]
  return (merge[pos - 1] + merge[pos]) / 2
}
