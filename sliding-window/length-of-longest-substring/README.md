## 题目链接：
- [Leet Code](https://leetcode.com/problems/longest-substring-without-repeating-characters)

## 题目大意：
- 在一个字符串重寻找没有重复字母的最⻓子串。

## 解题思路：
- 使用滑动窗口，将右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字
  符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，
  每次移动需要计算当前⻓度，并判断是否需要更新最大⻓度，最终最大的值就是题目中的所求。
