/**
 * Searches for `target` in the array
 * @param {number[]} nums - Array of integers
 * @param {number} target - The target number
 * @returns {number} - The index of the target element if it is present, -1 otherwise
 */
export default function linearSearch(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}
