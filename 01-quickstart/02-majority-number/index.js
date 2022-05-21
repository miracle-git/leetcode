import majorityNumber from './src/main'

console.log(majorityNumber.hash([2, 2, 1])) // 2
console.log(majorityNumber.hash([4, 1, 2, 1, 2, 2])) // 2
console.log(majorityNumber.hash([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])) // 3

console.log(majorityNumber.sort([2, 2, 1])) // 2
console.log(majorityNumber.sort([4, 1, 2, 1, 2, 2])) // 2
console.log(majorityNumber.sort([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])) // 3

console.log(majorityNumber.divide([2, 2, 1])) // 2
console.log(majorityNumber.divide([4, 1, 2, 1, 2, 2])) // 2
console.log(majorityNumber.divide([3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4])) // 3
