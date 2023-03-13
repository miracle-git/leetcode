import { maxArea } from '../array'

test('测试：最大盛水量(利用对撞指针)', () => {
  expect(maxArea.v1([1,8,6,2,5,4,8,3,7])).toEqual(49)
})
