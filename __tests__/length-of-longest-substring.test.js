import { lengthOfLongestSubstring } from '../sliding-window'

test('测试：寻找最长无重复子串(滑动窗口&Set)', () => {
  expect(lengthOfLongestSubstring.v1('')).toEqual(0)
  expect(lengthOfLongestSubstring.v1('a')).toEqual(1)
  expect(lengthOfLongestSubstring.v1('abcabcbb')).toEqual(3)
  expect(lengthOfLongestSubstring.v1('bbbbb')).toEqual(1)
  expect(lengthOfLongestSubstring.v1('pwwkew')).toEqual(3)
})

test('测试：寻找最长无重复子串(滑动窗口&Map)', () => {
  expect(lengthOfLongestSubstring.v2('')).toEqual(0)
  expect(lengthOfLongestSubstring.v2('a')).toEqual(1)
  expect(lengthOfLongestSubstring.v2('abcabcbb')).toEqual(3)
  expect(lengthOfLongestSubstring.v2('bbbbb')).toEqual(1)
  expect(lengthOfLongestSubstring.v2('pwwkew')).toEqual(3)
})

