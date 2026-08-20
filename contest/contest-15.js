/*Question 1:
Given a string s containing only the characters '(', ')', '{', '}', '[', and ']',
 return true if the input string is valid. */
var isValid = function (s) {
  let stack = [];

  let mp = new Map();
  mp.set(")", "(");
  mp.set("]", "[");
  mp.set("}", "{");

  for (let char of s) {
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }
    if (mp.get(char) == stack.at(-1)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? true : false;
};
/*Question 2:
Design a stack that supports:

push(x)
pop()
top()
getMin()

All operations must run in O(1) time. */

class MinStack {
  constructor() {
    this.stack = [];
    this.extras = [];
    this.min = Infinity;
  }

  push(val) {
    this.stack.push(val);
    if (val <= this.min) {
      this.min = val;
      this.extras.push(this.min);
    }
    return;
  }
  pop() {
    if (this.extras.length > 0 && this.stack.at(-1) === this.extras.at(-1))
      this.extras.pop();
    this.stack.pop();

    return;
  }

  getMin() {
    return this.extras.at(-1);
  }
}

/*

Question 3:
You are given an array temperatures where temperatures[i] is the temperature on the i-th day.
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/
function dailyTemperatures(temp) {
  let stack = [];
  let result = Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    let ele = [temp[i], i];

    if (stack.length === 0) stack.push(ele);
    else {
      while (stack.length > 0 && ele[0] > stack.at(-1)[0]) {
        let top = stack.at(-1);

        result[top[1]] = ele[1] - top[1];
        stack.pop();
      }
      stack.push(ele);
    }
  }
  return result;
}
