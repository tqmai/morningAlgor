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
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.index === 0) {
      return undefined;
  }
  
  return this.store[this.index - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  // this variable will be compared to all the values in the store
  let min = Infinity;
  
  // iterate through all the values and compare them to min
  for (const key in this.store) {
      if (this.store[key] < min) {
          min = this.store[key];
      }
  }
  
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/