import SinglyListNode from "@/data-structures/linked-list/singly-linked-list/singly-list-node";

/**
 * Reverses a singly linked list in-place
 * @template {T} - The type of value stored in linked list
 * @param {SinglyListNode<T>} head - The head of linked list
 * @returns {SinglyListNode<T>} - The new head of linked list
 */
export default function reversal<T>(
  head: SinglyListNode<T>
): SinglyListNode<T> {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
