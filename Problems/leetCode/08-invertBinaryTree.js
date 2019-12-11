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

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTreeIterative = function(root) {
  // if root doesn't exist, then return null
  if (!root) {
    return null;
  }

  // create a queue to determine what nodes to look at 
  const queue = [];

  // add root to the queue
  queue.push(root);

  // do this while queue is not empty
  // when it is empty, we will have gone through the entire tree
  while (queue.length !== 0) {
    // make pointer to current node
    const pointer = queue[0];
    
    // swap the left and right sides of the current node
    [pointer.left, pointer.right] = [pointer.right, pointer.left];

    // add the left side to the queue if it is not null
    if (pointer.left) {
      queue.push(pointer.left);
    }

    // add the right side to the queue if it is not null
    if (pointer.right) {
      queue.push(pointer.right);
    }

    // remove the current node from the queue
    queue.shift();
  }

  return root;
}