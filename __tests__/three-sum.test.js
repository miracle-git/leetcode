import { threeSum } from '../array'

test('测试：三数之和(降维)', () => {
  expect(threeSum.v1([-1,0,1,2,-1,-4]).length).toEqual(2)
  expect(threeSum.v1([0,1,1]).length).toEqual(0)
  expect(threeSum.v1([0,0,0]).length).toEqual(1)
})
