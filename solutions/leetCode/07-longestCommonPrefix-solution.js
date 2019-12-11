/*
leetcode #14
Given an array of strings, return the longest common prefix.

e.g. const sampleArray = ['abcdef', 'abcghi', 'abcabc'] --> 'abc'
*/

const longestCommonPrefix = (strings) => {
  let buildReturnString = '';
  let longestString = 0;

  strings.forEach((string) => {
    if (string.length > longestString) {
      longestString = string.length;
    }
  });
  for (let i = 0; i < longestString; i += 1) { // i is position of character we checking (index)
    let currentChar = ''; // a
    for (let k = 0; k < strings.length; k += 1) {
      const string = strings[k];
      if (currentChar.length === 0) {
        currentChar = string[i];
      }
      if (string[i] !== currentChar) {
        return buildReturnString;
      }
    }
    buildReturnString += currentChar;
  }

  return buildReturnString;
};

const exampleStrings = ['abcef', 'abcghi', 'abcabc'];
console.log(longestCommonPrefix(exampleStrings));
