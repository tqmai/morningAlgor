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

// Example 3:

// Input:
//     3
//    / \
//   0   4
//    \
//     2
//    /
//   1

//   L = 1
//   R = 2

// Output:
//    2
//   /
//  1



//     2
//    /
//   1


const threenode = 'threenode';
const twonode = 'twonode';

let root = threenode;
root = twonode;


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
  // strategy: traverse the tree to find elements less than L to be removed
  // then traverse the tree to find elements greater than R to be removed
  // might need to reassign nodes 

  // if current node is not null AND
  // is smaller than L OR is greater than R, reassign root to that that of node.left or node.right
  // note: the check that a value is not null must happen before the other part
  while (root !== null && (root.val < L || root.val > R)) {
    if (root.val < L) {
      root = root.right;
    } else {
      root = root.left;
    }
  }

  // if there is no root at this point, return null
  if (!root) {
    return null;
  }

  // check to see if left node is greater than L
  while (root.left !== null && root.left.val < L) {
    // if it is not, then to see if it has any right nodes
    if (root.left.right) {
      // if it does, reassign root.left to be that of root.left.right
      root.left = root.left.right;
    } else {
      // if it does not, trim the entire branch (reassign root.left to be null)
      root.left = null;
    }
  }
  // repeat until root.left is null or greater than L

  // then recursively call trimBST on the left node and save the result as root.left
  // if it's not null
  if (root.left) {
    root.left = trimBST(root.left, L, R);
  }

  // repeat for the right side

  // check to see if right node is smaller than R
  while (root.right !== null && root.right.val > R) {
    // if it is not, then to see if it has any left nodes
    if (root.right.left) {
      // if it does, reassign root.right to be that of root.right.left
      root.right = root.right.left;
    } else {
      // if it does not, trim the entire branch (reassign root.left to be null)
      root.right = null;
    }
  }
  // repeat until root.right is null or smaller than G

  // then recursively call trimBST on the right node and save the result as root.right
  // if it's not null
  if (root.right) {
    root.right = trimBST(root.right, L, R);
  }

  return root;
};

const fourtyfive = new TreeNode(45);
const thirty = new TreeNode(30);
fourtyfive.left = thirty;

const fiftyfour = new TreeNode(54);
fourtyfive.right = fiftyfour;

const thirtysix = new TreeNode(36);
thirty.right = thirtysix;

console.log('result', trimBST(fourtyfive, 32, 46));