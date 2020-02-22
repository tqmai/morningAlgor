/* eslint-disable arrow-body-style */
/* https://leetcode.com/problems/sum-of-even-numbers-after-queries/ #985

We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].
Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently
modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer
to the i-th query.


Example 1:

Input: arr = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation:
At the beginning, the array is [1,2,3,4].
After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    1 <= queries.length <= 10000
    -10000 <= queries[i][0] <= 10000
    0 <= queries[i][1] < A.length

    */

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function (arr, queries) {
  const result = [];
  const arrCopy = [...arr];
  queries.forEach((innerArr) => {
    arrCopy[innerArr[1]] += innerArr[0];
    const sumToPush = arrCopy.reduce((acc, num) => {
      if (num % 2 === 0) {
        return acc + num;
      }
      return acc;
    }, 0);
    result.push(sumToPush);
  });

  return result;
};

const sumEvenAfterQueriesLinear = function (arr, queries) {
  const result = [];
  const arrCopy = [...arr];
  let evenSum = arrCopy.reduce((acc, num) => {
    return num % 2 === 0
      ? acc + num
      : acc;
  }, 0);

  queries.forEach((innerArr) => {
    const value = innerArr[0];
    const index = innerArr[1];
    const sum = value + arrCopy[index];

    if (sum % 2 === 0 && arrCopy[index] % 2 === 0) {
      evenSum += value;
    } else if (sum % 2 === 0) {
      evenSum += sum;
    } else if (arrCopy[index] % 2 === 0) {
      evenSum -= arrCopy[index];
    }
    arrCopy[index] += value;
    result.push(evenSum);
  });

  return result;
};

const sampleArray = [1, 2, 3, 4];
const sampleQueries = [[1, 0], [-3, 1], [-4, 0], [2, 3]];
console.log(sumEvenAfterQueriesLinear(sampleArray, sampleQueries)); // -> [8, 6, 2, 4]
