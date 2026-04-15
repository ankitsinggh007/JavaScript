/*
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals k.
Example:
Input: nums = [1,1,1], k = 2
Output: 2
function subarraySum(nums, k) {}
*/

function subarraySum(nums, k) {
  let mp = new Map();
  let sum = 0;
  mp.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (mp.has(sum - k)) count += mp.get(sum - k);
    mp.set(sum, (mp.get(sum) || 0) + 1);
  }
  let count = 0;
}

/*Question 2:
Given an array heights where heights[i] represents the height of a bar, return how much rain water can be trapped after raining.
Example:
Input: heights = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
function trap(heights) {}
*/
var trap = function (height) {
  let trapped = 0;
  const stack = []; // store indices

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const mid = stack.pop(); // bottom of valley

      if (!stack.length) break; // no left boundary

      const left = stack[stack.length - 1];
      const width = i - left - 1;
      const boundedHeight = Math.min(height[i], height[left]) - height[mid];

      trapped += width * boundedHeight;
    }

    stack.push(i);
  }

  return trapped;
};
