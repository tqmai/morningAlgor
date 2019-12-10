/*
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
  for (let i = 0; i < longestString; i += 1) {
    let currentChar = '';
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

// const exampleStrings = ['abcdef', 'abcdghi', 'abcdabc'];
// console.log(solution(exampleStrings));
