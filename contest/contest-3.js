/*
🧪 MOCK OA-2 (SDE-1 Frontend | Indian Unicorns)

Difficulty: Slightly harder than real OA
Time: 75 minutes
Rules: Same as before — no hints, solve on platform, report after.

 */
// LeetCode 238 — Product of Array Except Self
var productExceptSelf = function (nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(0);
  let sufix = new Array(n).fill(0);
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= nums[i];
    prefix[i] = product;
  }
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    product *= nums[i];
    sufix[i] = product;
  }

  let result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    result[i] =
      (prefix[i - 1] === undefined ? 1 : prefix[i - 1]) *
      (sufix[i + 1] === undefined ? 1 : sufix[i + 1]);
  }
  return result;
};

// LeetCode 739 — Daily Temperatures
var dailyTemperatures = function (temperatures) {
  let st = [];
  let n = temperatures.length;

  let result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let curr = temperatures[i];
    while (st.length && curr > temperatures[st.at(-1)]) {
      let index = st.pop();
      result[index] = i - index;
    }
    st.push(i);
  }
  return result;
};
