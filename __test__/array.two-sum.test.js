import { twoSum } from '../array'

test('测试：两数之和(暴力解法)', () => {
  expect(twoSum.byAC([], 10)).toEqual([])
  expect(twoSum.byAC([2], 10)).toEqual([])
  expect(twoSum.byAC([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.byAC([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.byAC([3, 3], 6)).toEqual([0, 1])
})

test('测试：两数之和(利用Map)', () => {
  expect(twoSum.byMap([], 10)).toEqual([])
  expect(twoSum.byMap([2], 10)).toEqual([])
  expect(twoSum.byMap([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.byMap([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.byMap([3, 3], 6)).toEqual([0, 1])
})

test('测试：两数之和(利用Map优化版)', () => {
  expect(twoSum.byMapOptimize([], 10)).toEqual([])
  expect(twoSum.byMapOptimize([2], 10)).toEqual([])
  expect(twoSum.byMapOptimize([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum.byMapOptimize([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum.byMapOptimize([3, 3], 6)).toEqual([0, 1])
})
