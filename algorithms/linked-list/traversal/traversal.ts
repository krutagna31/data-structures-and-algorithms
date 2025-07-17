import SinglyListNode from "@/data-structures/linked-list/singly-linked-list/singly-list-node";

/**
 * Traverses the linked list
 * @template {T} - The type of value stored in linked list
 * @param {SinglyListNode<T>} head - The head of singly linked list
 * @returns {void}
 */
export default function traversal<T>(head: SinglyListNode<T>): void {
  let curr = head;
  while (curr) {
    curr = curr.next;
  }
}
