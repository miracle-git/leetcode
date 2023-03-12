import { findMedianSortedArrays } from '../array'

test('测试：寻找排序数组的中位数(直接合并)', () => {
  expect(findMedianSortedArrays.v1([1],[])).toEqual(1)
  expect(findMedianSortedArrays.v1([1],[2])).toEqual(1.5)
  expect(findMedianSortedArrays.v1([1, 3],[2])).toEqual(2)
  expect(findMedianSortedArrays.v1([1, 2],[3, 4])).toEqual(2.5)
  expect(findMedianSortedArrays.v1([1, 2, 3, 6, 8],[3, 5, 9, 10])).toEqual(5)
})

test('测试：寻找排序数组的中位数(掐头去尾)', () => {
  expect(findMedianSortedArrays.v2([1],[])).toEqual(1)
  expect(findMedianSortedArrays.v2([1],[2])).toEqual(1.5)
  expect(findMedianSortedArrays.v2([1, 3],[2])).toEqual(2)
  expect(findMedianSortedArrays.v2([1, 2],[3, 4])).toEqual(2.5)
  expect(findMedianSortedArrays.v2([1, 2, 3, 6, 8],[3, 5, 9, 10])).toEqual(5)
})
