export default function lengthOfLongestSubstring(s) {
  const len = s.length
  if (len === 0 || len === 1) return len

  const map = new Map()
  let left = 0
  let max = 0

  for (let i = 0; i < len; i++) {
    const cur = s[i]
    if (map.has(cur)) {
      left = Math.max(left, map.get(cur) + 1)
    }
    map.set(cur, i)
    max = Math.max(max, i - left + 1)
  }

  return max
}
