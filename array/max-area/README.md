## 题目链接：
- [Leet Code](https://leetcode.com/problems/container-with-most-water)

## 题目大意：
- 给出一个非负整数数组 a1，a2，a3，...... an，每个整数标识一个竖立在坐标轴 x 位置的一堵高度为 ai 的墙，选择两堵墙，和 x 轴构成的容器可以容纳最多的水。

## 解题思路：
- 这一题也是对撞指针的思路。首尾分别 2 个指针，每次移动以后都分别判断⻓宽的乘积是否最大。
![img.png](img.png)
