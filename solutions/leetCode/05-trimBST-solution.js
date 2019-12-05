// Given a binary search tree and the lowest and highest boundaries as L and R, trim
// the tree so that all its elements lies in [L, R] (R >= L). You might need to change
// the root of the tree, so the result should return the new root of the trimmed binary search tree.

// Example 1:

// Input:
//     1
//    / \
//   0   2

//   L = 1
//   R = 2

// Output:
//     1
//       \
//        2

// Example 2:

// Input:
//     3
//    / \
//   0   4
//    \
//     2
//    /
//   1

//   L = 1
//   R = 3

// Output:
//       3
//      /
//    2
//   /
//  1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  // edge case for when the root is null/undefined
  if (!root) return root;

  // these shift the center root depending on L and R
  if (root.val > R) return trimBST(root.left, L, R);
  if (root.val < L) return trimBST(root.right, L, R);

  // these trim the two branches of the BST recursively
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);

  return root;
};


// test:
// const fourtyfive = new TreeNode(45);
// const thirty = new TreeNode(30);
// fourtyfive.left = thirty;

// const fiftyfour = new TreeNode(54);
// fourtyfive.right = fiftyfour;

// const thirtysix = new TreeNode(36);
// thirty.right = thirtysix;

// console.log('result', trimBST(fourtyfive, 32, 46));