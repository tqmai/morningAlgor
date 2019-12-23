/* https://leetcode.com/problems/jewels-and-stones/ #771

You're given strings jewels representing the types of stones that are jewels, and stones
representing the stones you have.  Each character in stones is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in jewels and stones are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Note:

    stones and jewels will consist of letters and have length at most 50.
    The characters in jewels are distinct.

*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  const tracker = new Set(jewels);
  let total = 0;

  for (let i = 0; i < stones.length; i += 1) {
    if (tracker.has(stones[i])) {
      total += 1;
    }
  }

  return total;
};

// Sample tests:

const sampleJewels = 'aA';
const sampleStones = 'aAAbbbb';

console.log(numJewelsInStones(sampleJewels, sampleStones)); // -> 3
