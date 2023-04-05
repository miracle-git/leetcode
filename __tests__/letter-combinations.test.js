import { letterCombinations } from '../depth-first-search'

test('测试：电话号码组合(DFS)', () => {
  expect(letterCombinations.v1('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be','bf', 'cd', 'ce', 'cf'])
  expect(letterCombinations.v1('')).toEqual([])
  expect(letterCombinations.v1('2')).toEqual(['a', 'b', 'c'])
})
