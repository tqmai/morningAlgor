/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = [];
  this.lengthOfStack = 0;
  this.lengthOfMinimumValueStack = 0;
  this.minimumValueStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (element) {
  this.stack[this.lengthOfStack] = element;
  this.lengthOfStack += 1;
  if (element < this.minimumValueStack[this.lengthOfMinimumValueStack - 1]
    || this.lengthOfMinimumValueStack === 0) {
    this.minimumValueStack[this.lengthOfMinimumValueStack] = element;
    this.lengthOfMinimumValueStack += 1;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.lengthOfStack < 1) {
    return undefined;
  }
  this.lengthOfStack -= 1;
  const valueToReturn = this.stack[this.lengthOfStack];
  console.log(valueToReturn);
  console.log(this.minimumValueStack[this.lengthOfMinimumValueStack - 1]);
  delete this.stack[this.lengthOfStack];
  if (valueToReturn === this.minimumValueStack[this.lengthOfMinimumValueStack - 1]) {
    this.lengthOfMinimumValueStack -= 1;
    delete this.minimumValueStack[this.lengthOfMinimumValueStack];
  }
  return valueToReturn;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.lengthOfStack - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimumValueStack[this.lengthOfMinimumValueStack - 1];
};

// Tests:
// const test = new MinStack();
// test.push(-2);
// test.push(0);
// test.push(-3);

// console.log(test);

// test.getMin(); // --> Returns -3.
// test.pop();
// test.top(); // --> Returns 0.
// test.getMin(); // --> Returns -2.

// console.log(test);
// console.log(test.getMin());
