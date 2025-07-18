import TreeNode from "@/data-structures/tree/binary-tree-node";

/**
 * Performs a preorder traversal on a tree
 * @template T - The type of value stored in tree node
 * @param {TreeNode<T> | null} root - The root of the binary tree
 * @returns {T[]} - An array of values in preorder traversal order
 */
export default function preorder<T>(root: TreeNode<T> | null): T[] {
  const values: T[] = [];

  const _preorder = (node: TreeNode<T>): void => {
    if (node === null) {
      return;
    }
    values.push(node.val);
    _preorder(node.left);
    _preorder(node.right);
  };
  
  _preorder(root);
  return values;
}

