export default function majorityNumber(nums = []) {
  let count = 0
  let res

  nums.reduce((r, s) => {
    s in r ? r[s]++ : (r[s] = 1)
    if (r[s] > count) {
      count = r[s]
      res = s
    }
    return r
  }, {})

  return res
}
