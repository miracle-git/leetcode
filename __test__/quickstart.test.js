import { singleNumber, majorityNumber } from '../01-quickstart'

test('测试：查找唯一数字', () => {
  expect(singleNumber([2, 2, 1])).toEqual(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4)
  expect(singleNumber([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toEqual(4)
})

test('测试：查找众数(使用对象哈希)', () => {
  expect(majorityNumber.hash([2, 2, 1])).toEqual(2)
  expect(majorityNumber.hash([4, 1, 2, 1, 2, 2])).toEqual(2)
  expect(majorityNumber.hash([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toEqual(3)
})

test('测试：查找众数(使用数据排序)', () => {
  expect(majorityNumber.sort([2, 2, 1])).toEqual(2)
  expect(majorityNumber.sort([4, 1, 2, 1, 2, 2])).toEqual(2)
  expect(majorityNumber.sort([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toEqual(3)
})
