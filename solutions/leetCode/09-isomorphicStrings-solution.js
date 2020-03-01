/*
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/

Given two strings str1 and str2, determine if they are isomorphic.

Two strings are isomorphic if the characters in str1 can be replaced to get str2.

All occurrences of a character must be replaced with another character while preserving the order
of characters. No two characters may map to the same character but a character may map to itself.

Example 1:
Input: str1 = "egg", str2 = "add"
Output: true

Example 2:
Input: str1 = "foo", str2 = "bar"
Output: false

Example 3:
Input: str1 = "paper", str2 = "title"
Output: true


Note:
You may assume both str1 and str2 have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphicQuadratic = function (str1, str2) {
  if (str1 === str2) {
    return true;
  }
  for (let i = 0; i < str1.length; i += 1) {
    if (str1.indexOf(str1[i]) !== str2.indexOf(str2[i])) {
      return false;
    }
  }
  return true;
};

const isIsomorphicLinear = function(str1, str2) {
  const charMap = {};
  const charMap2 = {};

  for (let i = 0; i < str2.length; i += 1) {
    const currentCharOf1 = str1[i];
    const currentCharOf2 = str2[i];
    if (!charMap[currentCharOf1]) {
      charMap[currentCharOf1] = currentCharOf2;
    } else if (currentCharOf2 !== charMap[currentCharOf1]) {
      return false;
    }
    if (!charMap2[currentCharOf2]) {
      charMap2[currentCharOf2] = currentCharOf1;
    } else if (currentCharOf1 !== charMap2[currentCharOf2]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * solution from Tim
 */
const isIsomorphic3 = function(s, t) {
  // create pairs object
  const pairs = {};

  // iterate through s
  for (let i = 0; i < s.length; i += 1) {
    // set variable pointing at current char of s
    const curChar = s[i];
    
    // if current char is not in pairs, add it to it 
    // set the corresponding character in t as its value
    if (!pairs[curChar]) {
      // but first check to see if another char already maps to this same char in t
      // aka if another key in pairs has the same value as this one
      // if yes, return false
      if (Object.values(pairs).includes(t[i])) {
        return false;
      }

      pairs[curChar] = t[i];
    }

    // if the current char is in pairs, check if the corresponding char in t matches 
    // that of the value in pairs
    if (pairs[curChar] !== t[i]) {
      // if it does not match, return false
      return false;
    }
  }

  // return true
  return true;
};


// alternative solution found on leetcode
var isIsomorphic2 = function(s, t) {
  var obj = {};

  for (var i = 0; i < s.length; i++) {
    if (!obj['s' + s[i]]) {
      obj['s' + s[i]] = t[i];
    } 

    if (!obj['t' + t[i]]) {
      obj['t' + t[i]] = s[i];
    } 

    if (t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) {
      return false;
    } 
  }

  return true;
};

// console.log(isIsomorphicQuadratic('eoo', 'add'));
// console.log(isIsomorphicQuadratic('eod', 'add'));
// console.log(isIsomorphicQuadratic('eed', 'aaf'));
// console.log(isIsomorphicQuadratic('eed', 'aoc'));
