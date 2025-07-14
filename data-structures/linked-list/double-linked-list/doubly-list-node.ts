/**
 * Class representing a node
 * @template {T} - The type of value stored in the nodek
 */
export default class DoublyListNode<T> {
  val: T;
  prev: DoublyListNode<T> | null;
  next: DoublyListNode<T> | null;

  /**
   * Creates a node instance
   * @param {T} val - The value to be stored in the node
   */
  constructor(val: T) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

