/* eslint-disable max-classes-per-file */
// 4.1 (page 109) Route Between Nodes:
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// directed: means that all connections are one-way

// strategy 1: using depth-first search
function routeBetweenNodesDFS(node1, node2, visited = []) {
  // edge case if either node doesn't exist
  if (!node1 || !node2) {
    return undefined;
  }

  // console.log('node1', node1);
  // console.log('node2', node2);

  // if node1 and node2 are the same, return true
  if (node1 === node2) {
    return true;
  }

  // add the current node to visited to avoid repeatedly visiting it
  // (for when the graph is cyclic)
  visited.push(node1);

  // start searching through the children
  for (let i = 0; i < node1.children.length; i += 1) {
    if (!visited.includes(node1.children[i])) {
      const result = routeBetweenNodesDFS(node1.children[i], node2, visited);

      // the following is used to avoid stopping at just the first branch of a node
      // as compared to using "return result", which will return false at the end
      // of the first branch, if there are no matches
      if (result) {
        return true;
      }
    }
  }

  return false;
}

// strategy 2: using breadth-first search
function routeBetweenNodesBFS(node1, node2, marked = new Set()) {
  // edge case if either node doesn't exist
  if (!node1 || !node2) {
    return undefined;
  }

  // create a queue of nodes to visit
  const queue = [];

  // mark the first node to avoid repeatedly visiting it
  // (for when the graph is cyclic)
  marked.add(node1);

  // add the first node to the queue
  queue.push(node1);

  // do the following while we still have nodes to check
  while (queue.length > 0) {
    // console.log(queue);

    // pull out the first node in the queue
    const curNode = queue.shift();

    // if curNode and node2 are the same, return true
    if (curNode === node2) {
      return true;
    }

    // add curNode's children to the queue
    curNode.children.forEach((child) => {
      // do this only if not already marked
      if (!marked.has(child)) {
        // add to queue
        queue.push(child);

        // mark the child
        marked.add(child);
      }
    });
  }

  return false;
}

// technically we don't need a Graph class, but it is here anyway lol
class Graph {
  constructor() {
    this.nodes = [];
  }
}
class Node {
  constructor(val) {
    this.value = val;
    this.children = [];
  }
}

const graph = new Graph();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4); // this is separate from the other nodes
const node5 = new Node(5);
graph.nodes.push(node1, node2, node3, node4, node5);
node1.children.push(node2);
node2.children.push(node3);
node3.children.push(node1); // this makes the graph cyclic
node1.children.push(node5); // node 1 has two children

// console.log(graph);
// console.log(node1);
// console.log(node2);
// console.log(node3);

console.log(routeBetweenNodesBFS(node1, node5));
