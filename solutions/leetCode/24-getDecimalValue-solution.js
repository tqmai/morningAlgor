/* eslint-disable no-use-before-define */
/* https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/ #1290

Given head which is a reference node to a singly-linked list. The value of each node in the linked
list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.


Example 1:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:

Input: head = [0]
Output: 0

Example 3:

Input: head = [1]
Output: 1

Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:

Input: head = [0,0]
Output: 0

*/


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
 * @param {ListNode} head
 * @return {number}
 */
// const getDecimalValue = function (head) {
//   const binaryArray = getBinaryArray(head);
//   let result = 0;
//   let valueToAdd = 1;

//   for (let i = binaryArray.length - 1; i >= 0; i -= 1) {
//     if (binaryArray[i] === 1) {
//       result += valueToAdd;
//     }
//     valueToAdd *= 2;
//   }

//   return result;
// };

// const getBinaryArray = function (head) {
//   const result = [];
//   let currentNode = head;

//   while (currentNode !== null) {
//     result.push(currentNode.val);
//     currentNode = currentNode.next;
//   }

//   return result;
// };

// 
const getDecimalValue = function (head) {
  let currentNode = head;
  let result = 0; // 21
  while (currentNode) {
    result = result * 2 + currentNode.val;
    currentNode = currentNode.next;
  }
  return result;
};

const sampleList = new ListNode(1);
sampleList.next = new ListNode(0);
sampleList.next.next = new ListNode(1);
sampleList.next.next.next = new ListNode(0);
sampleList.next.next.next.next = new ListNode(1);

console.log(getDecimalValue(sampleList));
