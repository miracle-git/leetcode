import { ListNode } from '../../__setup__'

export default function addTwoNumbers(l1, l2, carry = 0) {
  if (!l1 && !l2 && !carry) return null
  const factor = node => node ? node.val : 0
  const sum = factor(l1) + factor(l2) + carry
  carry = parseInt(sum / 10)
  return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, carry))
}
