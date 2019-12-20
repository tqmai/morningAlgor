/* https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
1287. Element Appearing More Than 25% In Sorted Array

Given an integer array sorted in non-decreasing order, there is exactly one integer
in the array that occurs more than 25% of the time.

Return that integer.


Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6


Constraints:

    1 <= arr.length <= 10^4
    0 <= arr[i] <= 10^5
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
  let currentCount = 0;
  let currentNum = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    if (num === currentNum) {
      currentCount += 1;
      if (currentCount > arr.length / 4) {
        return num;
      }
    } else {
      currentNum = num;
      currentCount = 1;
    }
  }

  return currentNum;
};

// currently incomplete :)
// const findSpecialIntegerLogN = function (arr) {
//   const fourthOfLength = arr.length / 4;
//   let currentNum = arr[Math.floor(fourthOfLength)];

//   console.log(currentNum);

// };

// MORE THAN 25%, hence GREATER THAN length / 4
console.log(findSpecialInteger([1, 2, 3, 3])); // -> 3
console.log(findSpecialInteger([1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7])); // -> 4
