/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n) time, O(1) space
const moveZeroes = function (nums) {
  // track # of zeroes seen so far
  let countOfZeroes = 0;

  nums.forEach((currentNum, i) => {
    // if current num is 0, add 1 to counter
    if (currentNum === 0) {
      countOfZeroes += 1;
      // else, shift current number to the left by # of spaces equal to # of zeroes seen
    } else {
      nums[i - countOfZeroes] = currentNum;
    }
  });

  // add # of zeroes seen to replace values at end of array looping backwards
  for (let i = 0; i < countOfZeroes; i += 1) {
    nums[nums.length - 1 - i] = 0;
  }

  return nums;
};

const sampleArray = [0, 1, 0, 3, 12];
console.log(moveZeroes(sampleArray)); // --> [1, 3, 12, 0, 0]
