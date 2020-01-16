/* https://leetcode.com/problems/binary-tree-level-order-traversal-ii/ #107

Given a binary tree, return the bottom-up level order traversal of its nodes' values.
(ie, from left to right,levelby level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

*/

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//  * @param {TreeNode} root
//  * @return {number[][]}
function dfs(node, level, nodesByLevel) {
  if (node === null) return nodesByLevel;

  if (nodesByLevel[level]) {
    nodesByLevel[level].push(node.val);
  } else {
    nodesByLevel[level] = [node.val];
  }

  nodesByLevel = dfs(node.left, level + 1, nodesByLevel);
  nodesByLevel = dfs(node.right, level + 1, nodesByLevel);

  return nodesByLevel;
}
function format(nodesByLevel) {
  const nodeVals = [];

  let i = 1;
  while (nodesByLevel[i]) {
    nodeVals.push(nodesByLevel[i]);
    i += 1;
  }

  return nodeVals.reverse();
}

const levelOrderBottom = function (root) {
  const nodesByLevel = dfs(root, 1, {});
  return format(nodesByLevel);
};


// Sample test:

const bst = new TreeNode(3);
bst.left = new TreeNode(9);
bst.right = new TreeNode(20);
bst.right.left = new TreeNode(15);
bst.right.right = new TreeNode(7);

console.log(levelOrderBottom(bst));
