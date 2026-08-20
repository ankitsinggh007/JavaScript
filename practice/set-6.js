//Q1 — Valid Parentheses
var isValid = function (s) {
  let stk = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") stk.push(s[i]);
    else if (s[i] === ")" && stk.at(-1) === "(") stk.pop();
    else if (s[i] === "}" && stk.at(-1) === "{") stk.pop();
    else if (s[i] === "]" && stk.at(-1) === "[") stk.pop();
    else return false;
  }

  return stk.length === 0 ? true : false;
};

// Stack — Q2: Min Stack Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

var MinStack = function () {
  this.main = [];
  this.extra = [];
};

MinStack.prototype.push = function (value) {
  this.main.push(value);

  if (this.extra.length === 0) {
    this.extra.push(value);
  } else {
    this.extra.push(Math.min(value, this.extra.at(-1)));
  }
};

MinStack.prototype.pop = function () {
  if (this.main.length === 0) return null;
  this.main.pop();
  this.extra.pop();
  return null;
};

MinStack.prototype.top = function () {
  if (this.main.length === 0) return null;

  return this.main.at(-1);
};

MinStack.prototype.getMin = function () {
  if (this.main.length === 0) return Infinity;
  return this.extra.at(-1);
};

let min = new MinStack();
console.log(min, "min", MinStack.prototype);
/* Q2 daily temperature
Given an array:
temperatures = [73,74,75,71,69,72,76,73]
O/P:-[1,1,4,2,1,1,0,0]
*/
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stk = [];
  let answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (stk.length > 0 && stk.at(-1)[0] < temperatures[i]) {
      while (stk.length > 0 && stk.at(-1)[0] < temperatures[i]) {
        answer[stk.at(-1)[1]] = i - stk.at(-1)[1];
        stk.pop();
      }
    }
    stk.push([temperatures[i], i]);
  }
  return answer;
};
/* Q3 Next Greatest Element
Given:
nums = [2, 1, 2, 4, 3]
Output:
[4, 2, 4, -1, -1]
*/
function nextGreaterElements(nums) {
  let n = nums.length;
  let stack = [];
  let answer = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack.at(-1)[0] < nums[i]) {
      let [prevValue, prevIndex] = stack.pop();
      answer[prevIndex] = nums[i];
    }

    stack.push([nums[i], i]);
  }

  return answer;
}
/*
Q4.Next Greatest element -2
*/
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let stk = [];
  let answer = new Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    while (stk.length > 0 && stk.at(-1)[0] < nums[i % n]) {
      answer[stk.at(-1)[1]] = nums[i % n];
      stk.pop();
    }

    if (i < n) stk.push([nums[i % n], i % n]);
  }
  return answer;
};
