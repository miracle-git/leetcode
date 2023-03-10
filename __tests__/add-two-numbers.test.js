import { ListNode, arrayToLinkList } from '../__setup__'
import { addTwoNumbers } from '../linked-list'

const cases = [
  { l1: arrayToLinkList([2, 4, 3]), l2: arrayToLinkList([5, 6, 4]), res: arrayToLinkList([7, 0, 8]) },
  { l1: arrayToLinkList([0]), l2: arrayToLinkList([0]), res: arrayToLinkList([0]) },
  { l1: arrayToLinkList([9, 9, 9, 9, 9, 9, 9]), l2: arrayToLinkList([9, 9, 9, 9]), res: arrayToLinkList([8, 9, 9, 9, 0, 0, 0, 1]) }
]

test('测试：两数相加(进位法)', () => {
  for(const item of cases) {
    expect(addTwoNumbers.v1(item.l1, item.l2)).toEqual(item.res)
  }
})
