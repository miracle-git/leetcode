import { lengthOfLongestSubstring } from '../sliding-window'

test('测试：寻找最长无重复子串(滑动窗口)', () => {
  expect(lengthOfLongestSubstring.v1('')).toEqual(0)
  expect(lengthOfLongestSubstring.v1('a')).toEqual(1)
  expect(lengthOfLongestSubstring.v1('abcabcbb')).toEqual(3)
  expect(lengthOfLongestSubstring.v1('bbbbb')).toEqual(1)
  expect(lengthOfLongestSubstring.v1('pwwkew')).toEqual(3)
})
