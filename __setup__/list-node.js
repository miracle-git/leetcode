/**
 * Definition for singly-linked list.
 */
export default function ListNode(val = 0, next = null) {
  this.val = val
  this.next = next
}

export function arrayToLinkList(arr, start = 0) {
  if (start === arr.length) return null
  const node = new ListNode(arr[start])
  node.next = arrayToLinkList(arr, start + 1)
  return node
}

export function linkListToArray(node) {
  let head = node
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

