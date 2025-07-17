import SinglyListNode from "@/data-structures/linked-list/singly-linked-list/singly-list-node";

function traversal<T>(head: SinglyListNode<T>): void {
  let curr = head;
  while (curr) {
    curr = curr.next;
  }
}

export default traversal;
