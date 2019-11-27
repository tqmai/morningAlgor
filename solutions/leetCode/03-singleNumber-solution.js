/**
 * @param {number[]} nums
 * @return {number}
 */

// If you see this comment, solution is still incomplete
const singleNumber = function(nums) {
  const tracker = {};

  nums.forEach((num) => {
    if (tracker[num] !== undefined) {
      tracker[num] = (tracker[num] || 0) += 1;
    }
  })
};