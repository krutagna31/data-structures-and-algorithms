/**
 * Class representing a node
 * @template {T} - The type of value stored in the node
 */
export default class SinglyListNode<T> {
  val: T;
  next: SinglyListNode<T> | null;

  /**
   * Creates a node instance
   * @param {T} val - The value to be stored in the node
   */
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

