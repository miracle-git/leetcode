import { twoSum } from '../array'

test('测试：两数之和(暴力解法)', () => {
  expect(twoSum.v1([], 10)).toEqual([])
  expect(twoSum.v1([2], 10)).toEqual([])
  expect(twoSum.v1([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.v1([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.v1([3, 3], 6)).toEqual([0, 1])
})

test('测试：两数之和(利用Map)', () => {
  expect(twoSum.v2([], 10)).toEqual([])
  expect(twoSum.v2([2], 10)).toEqual([])
  expect(twoSum.v2([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.v2([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.v2([3, 3], 6)).toEqual([0, 1])
})

test('测试：两数之和(利用Map优化版)', () => {
  expect(twoSum.v3([], 10)).toEqual([])
  expect(twoSum.v3([2], 10)).toEqual([])
  expect(twoSum.v3([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.v3([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.v3([3, 3], 6)).toEqual([0, 1])
})
