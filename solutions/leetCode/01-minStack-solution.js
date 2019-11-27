// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


/**
 * initialize your data structure here.
 */

// Solution using no array methods.

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
  if (element <= this.minimumValueStack[this.lengthOfMinimumValueStack - 1]
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
    return 0;
  }
  this.lengthOfStack -= 1;
  const valueToReturn = this.stack[this.lengthOfStack];
  if (valueToReturn === this.minimumValueStack[this.lengthOfMinimumValueStack - 1]) {
    this.lengthOfMinimumValueStack -= 1;
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
  if (this.lengthOfMinimumValueStack < 1) {
    return 0;
  }
  return this.minimumValueStack[this.lengthOfMinimumValueStack - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */