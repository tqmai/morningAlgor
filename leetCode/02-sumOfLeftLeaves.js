/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
  // sum variable
  let sum = 0;
  
  if (!root) {
    return sum;
  }

  // if root has a left node
  if (root.left) {
    // if the left node is a leaf 
    if (root.left.left === null && root.left.right === null) {
      // add the value of the leaf to sum
      sum += root.left.val;
    }

    // call sumOfLeftLeaves recursively on left node
    sum += sumOfLeftLeaves(root.left);
  }

  // if root has a right node
  if (root.right) {
    // call sumOfLeftLeaves recursively on left node
    sum += sumOfLeftLeaves(root.right);
  }

  return sum;
};

// const three = new TreeNode(3);
// const nine = new TreeNode(9);
// const twenty = new TreeNode(20);
// const fifteen = new TreeNode(15);
// const seven = new TreeNode(7);
// three.left = nine;
// three.right = twenty;
// twenty.left = fifteen;
// twenty.right = seven;

// console.log(three);

// console.log(sumOfLeftLeaves(three));