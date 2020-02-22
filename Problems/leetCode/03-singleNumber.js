/*
Given a non-empty array of integers, every element appears
twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
* @param {number[]} nums
* @return {number}
*/
// O(n) time
// O(n) space
const singleNumber = function(nums) {
  // create store for values
  const store = {};

  // iterate through nums
  for (let i = 0; i < nums.length; i += 1) {
    // if in store, remove it and move to next cycle of loop
    if (store[nums[i]]) {
      delete store[nums[i]];
      continue;
    }

    // if not in store, add it
    store[nums[i]] = true;
  }

  // return the remaining value in store
  return Object.keys(store)[0];
};

// O(n) time
// O(1) space
// ~XOR magic~
/*
Concept:

If we take XOR of zero and some bit, it will return that bit:
  a ⊕ 0 = a

If we take XOR of two same bits, it will return 0:
  a ⊕ a = 0

a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = b

So we can XOR all bits together to find the unique number.
*/
const singleNumber2 = function(nums) {
  // result variable
  let result = 0;

  // use XOR on every num
  // the result will be the single number
  for (let i = 0; i < nums.length; i +=1) {
    result = result ^ nums[i];
  }

  return result;

  // alternatively, do all the above in a single operation:
  // return nums.reduce((acc, curVal) => {
  //   return acc ^ curVal;
  // });
}

// examples
// const arr1 = [2,2,1]
// console.log(singleNumber(arr1));
// console.log(singleNumber2(arr1));

// const arr2 = [4,1,2,1,2];
// console.log(singleNumber(arr2));
// console.log(singleNumber2(arr2));
