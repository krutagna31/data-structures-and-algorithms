/**
 * Searches for `target` in the array
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - The target number
 * @returns {number} - The index of target element if it is present, -1 otherwise
 */
export default function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
