// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// with additional data structures
// O(n) time
// O(n) space
// input: string
// output: boolean
function isUnique(str) {
  // create a set
  const chars = new Set();

  // iterate through str
  for (let i = 0; i < str.length; i += 1) {
    // if character is in set, return false
    if (chars.has(str[i])) {
      return false;
    }

    // if character is not in set, add to set
    chars.add(str[i]);
  }
    
  return true;
}

// without additional data structures
// O(n^2) time
// O(1) space
// input: string
// output: boolean
function isUnique2(str) {
  // iterate through str and compare each character to all the other characters
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {      
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

// without additional data structures
// O(n log n) time
// O(1) space
// only works if str is passed in as an array
// input: array of characters
// output: boolean
function isUnique3(str) {
  sortedArr = str.split('').sort();

  return sortedArr.every((char, i) => char !== str[i + 1]);
}

console.log(isUnique3('helo'));