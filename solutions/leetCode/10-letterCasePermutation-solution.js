/* https://leetcode.com/problems/letter-case-permutation/ (#784)
Given a string str, we can transform every letter individually to be lowercase or
uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: str = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: str = "3z4"
Output: ["3z4", "3Z4"]

Input: str = "12345"
Output: ["12345"]

Note:

    str will be a string with length between 1 and 12.
    str will consist only of letters or digits.
*/

/**
 * @param {string} str
 * @return {string[]}
 */
const letterCasePermutation = function(str) {
  const stringArray = [str];

  for (let i = 0; i < str.length; i += 1) {
    const currentStringArray = [...stringArray];
    let alphabet = false;
    for (let k = 0; k < currentStringArray.length; k += 1) {
      currentStringArray[k] = currentStringArray[k].split('');
      if (currentStringArray[k][i].charCodeAt() >= 65 && currentStringArray[k][i].charCodeAt() <= 90) {
        alphabet = true;
        currentStringArray[k][i] = currentStringArray[k][i].toLowerCase();
      } else if (currentStringArray[k][i].charCodeAt() >= 97 && currentStringArray[k][i].charCodeAt() <= 122) {
        alphabet = true;
        currentStringArray[k][i] = currentStringArray[k][i].toUpperCase();
      }
      currentStringArray[k] = currentStringArray[k].join('');
    }
    if (alphabet) {
      stringArray.push(...currentStringArray);
    }
  }

  return stringArray;
};

console.log(letterCasePermutation('1BC'));
