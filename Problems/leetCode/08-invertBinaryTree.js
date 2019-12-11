/* https://leetcode.com/problems/invert-binary-tree/

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
    // if root doesn't exist, then return null
    if (!root) {
      return null;
    }

    // swap the positions of root.left and root.right
    [root.left, root.right] = [root.right, root.left];

    // recursive call invertTree on both sides
    invertTree(root.right);
    invertTree(root.left);

    return root;
};