// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  let sum = 0;
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      sum += root.left.val;
    }
    sum += sumOfLeftLeaves(root.left);
  }
  if (root.right) {
    sum += sumOfLeftLeaves(root.right);
  }
  return sum;
};

const iterativeSumOfLeftLeaves = function (root) {
  if (root === null) {
    return 0;
  }
  const queue = [root];
  let sum = 0;
  let currentNode;

  while (queue.length) {
    currentNode = queue.shift();
    // check if left node exist & add to queue
    if (currentNode.left) {
      queue.push(currentNode.left);
      // if left node exist, check if it is a leave
      if (!currentNode.left.left && !currentNode.left.right) sum += currentNode.left.val;
    }
    // check if right node exist & add to queue
    if (currentNode.right) queue.push(currentNode.right);
  }

  return sum;
};

// Example:
const bst = new TreeNode(5);
bst.left = new TreeNode(3);
bst.left.left = new TreeNode(1);
bst.left.right = new TreeNode(2);
bst.right = new TreeNode(7);
bst.right.left = new TreeNode(6);
bst.right.right = new TreeNode(8);

// console.log(bst);
// console.log(iterativeSumOfLeftLeaves(bst));
// console.log(iterativeSumOfLeftLeaves(bst));
