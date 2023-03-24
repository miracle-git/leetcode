import { threeSumClosest } from '../array'

test('测试：三数之和(对撞)', () => {
  expect(threeSumClosest.v1([-1,2,1,-4],1)).toEqual(2)
  expect(threeSumClosest.v1([0,0,0],1)).toEqual(0)
})
