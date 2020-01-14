/* https://leetcode.com/problems/ransom-note/ #383

 Given an arbitrary ransom note string and another string containing letters from all the magazines,
 write a function that will return true if the ransom note can be constructed from the magazines;
 otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const letterPool = {};

  for (let i = 0; i < magazine.length; i += 1) {
    letterPool[magazine[i]] = (letterPool[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    if (!letterPool[ransomNote[i]]) {
      return false;
    }
    letterPool[ransomNote[i]] -= 1;
  }

  return true;
};

// Tests:

// console.log(canConstruct('a', 'b')); // -> false
// console.log(canConstruct('aa', 'ab')); // -> false
// console.log(canConstruct('aa', 'aab')); // -> true
