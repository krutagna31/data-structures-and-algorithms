import TreeNode from "@/data-structures/tree/binary-tree-node";
import Stack from "@/data-structures/stack/stack";

/**
 * Performs a inorder traversal on a tree
 * @template T - The type of value stored in the tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in preorder traversal order
 */
export default function inorder<T>(root: TreeNode<T> | null): T[] {
  const values = [];
  const stack = new Stack<TreeNode<T>>();
  let curr = root;

  while (stack.size > 0 || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      const node = stack.pop();
      values.push(node.val);
      curr = node.right;
    }
  }
  
  return values;
}

