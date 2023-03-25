import { fourSum } from '../array'

test('测试：四数之和(降维)', () => {
  expect(fourSum.v1([1,0,-1,0,-2,2], 0).length).toEqual(3)
  expect(fourSum.v1([2,2,2,2,2], 8).length).toEqual(1)
})
