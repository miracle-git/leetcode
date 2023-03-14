export default function threeSum(nums) {
  const len = nums.length, res = []
  // 优先对数组进行排序
  nums.sort((a, b) => a - b)
  // 只需要查找到倒数第二个数即可
  for (let i = 0; i < len - 2; i++) {
    // 已经查找过的数则直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 定义左右指针(左指针指向第一个数而不是第0个，因为第0个数为target)
    let start = i + 1, end = len - 1;
    while (start < end) {
      const sum = nums[start] + nums[end] + nums[i];
      if (sum) {
        // 如果小于 0 则移动左指针，如果大于 0 则移动右指针
        sum < 0 ? start++ : end--
      } else {
        // 如果找到 3 个索引位加起来位0，则直接添加并移动左右指针
        res.push([nums[start++], nums[end--], nums[i]]);
        // 为避免重复，如果下一个数或上一个数与当前相同，可继续移动指针而跳过循环
        while (nums[start] === nums[start - 1]) start++;
        while (nums[end] === nums[end + 1]) end--;
      }
    }
  }
  return res
}
