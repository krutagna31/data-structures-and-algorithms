import MinHeap from "@/data-structures/heap/min-heap";
import PriorityNode from "@/data-structures/priority-queue/priority-node";

/**
 * Class reprsenting a priority queue
 * @template {T} - The type of value stored in priority queue
 */
export default class PriorityQueue<T> {
  heap: MinHeap<PriorityNode<T>>;

  /**
   * Creates a priority queue instance
   */
  constructor() {
    this.heap = new MinHeap((a, b) => a.priority - b.priority);
  }

  /**
   * Adds an element to the priority queue with a given priority
   * @param {T} val - The value to be added to the priority queue
   * @param {number} priority - The priority of the value
   * @returns {void}
   */
  enqueue(val: T, priority: number): void {
    const node = new PriorityNode(val, priority);
    this.heap.push(node);
  }

  /**
   * Removes the element with lowest priority value
   * @throws {Error} - An error when the priority queue is empty
   * @returns {T} - The value with the highest priority
   */
  dequeue(): T {
    if (this.heap.values.length === 0) {
      throw new Error("Priority Queue Underflow");
    }

    const node = this.heap.pop();
    return node.val;
  }

  /**
   * Retrieves the element with the highest priority
   * @throws {Error} - An error when the priority queue is empty
   * @returns {T} - The value with the highest priority
   */
  peek(): T {
    if (this.heap.values.length === 0) {
      throw new Error("Priority Queue Underflow");
    }
    return this.heap.peek().val;
  }

  /**
   * Returns the number of elements in the priority queue
   * @returns {number} - The number of elements in the priority queue
   */
  size(): number {
    return this.heap.size();
  }

  /**
   * Checks whether the priority queue is empty
   * @returns {boolean} - `true` if the priority queue is empty, `false` otherwise
   */
  isEmpty(): boolean {
    return this.heap.isEmpty();
  }
}
