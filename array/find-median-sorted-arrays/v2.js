export default function findMedianSortedArrays(nums1, nums2) {
  const m = nums1.length, n = nums2.length
  if (m === 0) {
    const pos = Math.floor(n / 2)
    return n % 2 ? nums2[pos] : (nums2[pos - 1] + nums2[pos]) / 2
  }
  if (n === 0) return findMedianSortedArrays(nums2, nums1)
  if (m + n <= 2 && m && n) return (nums1[0] + nums2[0]) / 2

  const max1 = nums1[m - 1]
  const max2 = nums2[n - 1]
  nums1[0] > nums2[0] ? nums2.shift() : nums1.shift()
  max1 > max2 ? nums1.pop() : nums2.pop()

  return findMedianSortedArrays(nums1, nums2)
}
