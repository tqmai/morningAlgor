/* https://leetcode.com/problems/middle-of-the-linked-list/ #876

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.


Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.


Note:

    The number of nodes in the given list will be between 1 and 100.
*/


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n) time/space
const middleNodeLinearSpace = function (head) {
  let count = 0; // count will be 1 larger than length of linked list
  const tracker = {};
  let currentNode = head;

  while (currentNode !== null) {
    count += 1;
    tracker[count] = currentNode;
    currentNode = currentNode.next;
  }

  return tracker[Math.ceil((count + 1) / 2)];
};

// add +1 to count before dividing by 2 and ceiling, this works to get center or center +1 node

const middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

// sample test
const sampleList = new ListNode(1);
sampleList.next = new ListNode(2);
// sampleList.next.next = new ListNode(3);
// sampleList.next.next.next = new ListNode(4);
// sampleList.next.next.next.next = new ListNode(5);
// sampleList.next.next.next.next.next = new ListNode(6);


console.log(middleNode(sampleList));
