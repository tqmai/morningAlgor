// 3.1 (page 98): Three in One: Describe how you could use a single array to implement three stacks.

// use a constructor function to create a special three-in-one array
function ThreeInOne() {
  this.arr = [];
  this.stack2start = 0;
  this.stack3start = 0;
}

// push an element to the first stack
ThreeInOne.prototype.push1 = function(val) {
  // insert the element before the start of the second stack
  this.arr.splice(this.stack2start, 0, val);

  // fix the starting indeces of the second and third stacks
  this.stack2start += 1;
  this.stack3start += 1;

  // return the length of the stack
  return this.stack2start;
};

// push an element to the second stack
ThreeInOne.prototype.push2 = function(val) {
  // insert the element before the start of the third stack
  this.arr.splice(this.stack3start, 0, val);

  // fix the starting indeces of the third stack
  this.stack3start += 1;

  // return the length of the stack
  return this.stack3start - this.stack2start;
};

// push an element to the third stack
ThreeInOne.prototype.push3 = function(val) {
  // insert the element at the end of the array
  this.arr.push(val);

  // return the length of the stack
  return this.arr.length - this.stack3start;
};

// pop an element from the first stack
ThreeInOne.prototype.pop1 = function() {
  // don't return anything if stack is empty
  if (this.stack2start === 0) {
    return undefined;
  }

  // splice out the last value of the first stack
  // splice returns an array
  const poppedVal = this.arr.splice(this.stack2start - 1, 1)[0];

  // fix the starting indeces of the second and third stacks
  this.stack2start -= 1;
  this.stack3start -= 1;

  // return the poppedVal
  return poppedVal;
}

// pop an element from the second stack
ThreeInOne.prototype.pop2 = function() {
  // don't return anything if stack is empty
  if (this.stack3start - this.stack2start === 0) {
    return undefined;
  }

  // splice out the last value of the second stack
  // splice returns an array
  const poppedVal = this.arr.splice(this.stack3start - 1, 1)[0];

  // fix the starting index of the third stack
  this.stack3start -= 1;

  // return the poppedVal
  return poppedVal;
}

// pop an element from the second stack
ThreeInOne.prototype.pop3 = function() {
  // don't return anything if stack is empty
  if (this.arr.length - this.stack3start === 0) {
    return undefined;
  }

  // pop out the last value of the third stack
  return this.arr.pop();
}
