export default function lengthOfLongestSubstring(s) {
  const len = s.length
  if (len === 0 || len === 1) return len

  const set = new Set()
  let left = 0
  let max = 0

  for (let i = 0; i < len; i++) {
    const cur = s[i]
    while (set.has(cur)) {
      set.delete(s[left++])
    }
    set.add(cur)
    max = Math.max(max, i - left + 1)
  }

  return max
}
