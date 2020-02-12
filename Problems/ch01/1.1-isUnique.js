// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
const isUnique = function (str) {
  const strSet = new Set();

  for (let i = 0; i < str.length; i += 1) {
    if (!strSet.has(str[i])) {
      strSet.add(str[i]);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isUnique('unique'));
