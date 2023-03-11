import { ListNode } from '../../__setup__'

export default function addTwoNumbers(l1, l2) {
  let head = new ListNode()
  let node = head
  let sum = 0, carry = 0

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum -= 10
    }

    node.next = new ListNode(sum)
    node = node.next

    sum = carry
    carry = 0
  }

  return head.next
}
