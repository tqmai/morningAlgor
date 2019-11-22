// 2.1 (page 94): Remove Dups: Write code to remove duplicates from an unsorted linked list. 
// FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// solution below does not use a temporary buffer
// input: first node of some linked list
// output: none
// O(n) time complexity
// O(n) space complexity
function removeDups(head) {
  // create cache of values
  const cache = new Set();

  // add value of first node to cache
  cache.add(head.val);

  // create cur variable set equal to head
  let cur = head;

  // iterate through linked list
  while (cur.next !== null) {
    // if the next node is already in cache, remove the node
    if (cache.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else { 
      // if the next node is not in cache, add it to cache
      cache.add(cur.next.val);

      // set cur equal to cur.next
      cur = cur.next;
    }
  }
}

// solution below does not use a temporary buffer
// input: first node of some linked list
// output: none
// O(n^2) time complexity
// O(1) space complexity
function removeDups2(head) {
  // create two pointers
  let point1 = head;
  let point2 = head;

  // iterate through linked list
  while (point1 !== null) {
    while (point2.next !== null) {
      // if point2.val === curr.val, remove it from linked list
      if (point2.next.val === point1.val) {
        point2.next = point2.next.next;
        // console.log(point2);
      } else {
        // else move to the next node in the list
        point2 = point2.next;
        // console.log(point2);
      }
    }
    // once you exit the inner loop, move point1 to the next node
    point1 = point1.next;
    // console.log(point1)

    // have point2 equal point1
    point2 = point1;
    // console.log(point2);
  }
}

const a = new Node(1);
const b = new Node(2);
a.next = b;
const c = new Node(2);
b.next = c;
const d = new Node(3);
c.next = d;

// console.log(a);

// removeDups2(a);

// console.log(a);