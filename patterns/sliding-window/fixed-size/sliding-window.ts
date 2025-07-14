/**
 * Applies a fixed size sliding window over an array
 * @param {number[]} nums - The input array
 * @param {number} k - The window size
 * @returns {void}
 */
export default function slidingWindow(nums: number[], k: number): void {
  for (let i = 0; i < nums.length; i++) {
    // add element to the window

    if (i >= k - 1) {
      // update the answer
      // remove element from the window
    }
  }
}
