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

//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTreeRecursive = function(root) {
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
  if (root === null) {
    return null;
  }

  const stack = [root];
  let currentNode = root;

  while (stack.length > 0) {
    currentNode = stack.pop();
    if (currentNode !== null) {
      const temp = currentNode.left;
      currentNode.left = currentNode.right;
      currentNode.right = temp;
      stack.push(currentNode.left);
      stack.push(currentNode.right);
    }
  }

  return root;
};

// Tests:
// const sampleBST = new TreeNode(4);
// sampleBST.left = new TreeNode(2);
// sampleBST.right = new TreeNode(6);
// sampleBST.left.left = new TreeNode(1);
// sampleBST.left.right = new TreeNode(3);
// sampleBST.right.left = new TreeNode(5);
// sampleBST.right.right = new TreeNode(7);

// console.log(sampleBST);
// console.log(invertTree(sampleBST));
