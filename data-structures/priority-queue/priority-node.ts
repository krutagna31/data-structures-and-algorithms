/**
 * Class representing a priority queue
 * @template {T} - The type of value stored in the node
 */
export default class PriorityNode<T> {
  priority: number;
  val: T;

  /**
   * Crates a node instance
   * @param {T} val - The value to be stored in the node
   * @param {number} priority - The priority of the value
   */
  constructor(val: T, priority: number) {
    this.priority = priority;
    this.val = val;
  }
}

