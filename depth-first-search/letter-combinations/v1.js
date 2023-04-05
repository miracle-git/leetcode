export default function letterCombinations(digits) {
  if (digits.length === 0) return []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const iterate = (nums) => {
    const arr = []
    if (nums.length === 1) return map[nums]
    const first = nums.slice(0, 1)
    const other = iterate(nums.slice(1))
    for (let i = 0; i < map[first].length; i++) {
      for (let j = 0; j < other.length; j++) {
        arr.push(map[first][i] + other[j])
      }
    }
    return arr
  }
  return iterate(digits)
}
