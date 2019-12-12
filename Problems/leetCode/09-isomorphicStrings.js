/*
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true


Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  // create pairs object
  const pairs = {};

  // iterate through s
  for (let i = 0; i < s.length; i += 1) {
    // set variable pointing at currentl char of s
    const curChar = s[i];
    
    // if current char is not in pairs, add it to it
    // set the corresponding character in t as its value
    if (!pairs[curChar]) {
      // check to see if another char already maps to this same char in t
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

  for(var i = 0; i < s.length; i++){
      if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
      if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
      if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
  }
  return true;
};