/* eslint-disable no-param-reassign */
// 4.2 (page 109) Minimal Tree
// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function minimalTree(arr, node) {
  // logic: to create a minimal tree, you need to add the middle element of the arr as the node
  // and each child will be the midpoint of the newly halved array
  // we are going to do this recursively

  // base case: if arr is empty, return null
  if (arr.length === 0) return null;

  // determine the midpoint of the array
  const midpoint = Math.floor(arr.length / 2);

  // create starting node with the center value if no node exists
  if (!node) {
    const newNode = new Node(arr[midpoint]);

    return minimalTree(arr, newNode);
  }

  // recursively call minimalTree with half the array for the
  // left and right children
  node.left = minimalTree(arr.slice(0, midpoint));
  node.right = minimalTree(arr.slice(midpoint + 1));

  return node;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(minimalTree(arr));
