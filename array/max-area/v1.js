export default function maxArea(heights) {
  let start = 0, end = heights.length - 1, max = 0
  while (start < end) {
    const width = end - start
    const height = heights[start] < heights[end] ? heights[start++] : heights[end--]
    max = Math.max(max, width * height)
  }
  return max
}
