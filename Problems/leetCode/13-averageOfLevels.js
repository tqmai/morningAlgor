/* https://leetcode.com/problems/average-of-levels-in-binary-tree/ #637
Given a non-empty binary tree, return the average value of the nodes on each level in the
form of an array.

Example 1:

Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence
return [3, 14.5, 11].
*/


//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const averageOfLevels = function (root) {
  
};

// const sampleTree = new TreeNode(3);
// sampleTree.left = new TreeNode(9);
// sampleTree.right = new TreeNode(20);
// sampleTree.right.left = new TreeNode(15);
// sampleTree.right.right = new TreeNode(7);

// console.log(averageOfLevels(sampleTree));
