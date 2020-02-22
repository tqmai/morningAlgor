/* https://leetcode.com/problems/cousins-in-binary-tree/ #993

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two
different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.


Example 1:

Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:

Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:

Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Note:

    The number of nodes in the tree will be between 2 and 100.
    Each node has a unique integer value from 1 to 100.

*/


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const stack = [root];
  let xNode;
  let yNode;
  root.depth = 0;
  root.parent = null;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.val === x) {
      xNode = currentNode;
    }
    if (currentNode.val === y) {
      yNode = currentNode;
    }
    if (currentNode.left !== null) {
      currentNode.left.depth = currentNode.depth + 1;
      currentNode.left.parent = currentNode;
      stack.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      currentNode.right.depth = currentNode.depth + 1;
      currentNode.right.parent = currentNode;
      stack.push(currentNode.right);
    }
  }

  if (xNode.depth === yNode.depth && xNode.parent !== yNode.parent) {
    return true;
  }

  return false;
};

// Example:
const bst = new TreeNode(1);
bst.left = new TreeNode(2);
// bst.left.left = new TreeNode(1);
bst.left.right = new TreeNode(4);
bst.right = new TreeNode(3);
// bst.right.left = new TreeNode(6);
bst.right.right = new TreeNode(5);

console.log(isCousins(bst, 5, 4));
console.log(bst.left.left);
