import { singleNumber } from '../01-quickstart'

test('测试：查找唯一数字', () => {
  expect(singleNumber([2, 2, 1])).toEqual(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4)
  expect(singleNumber([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toEqual(4)
})
