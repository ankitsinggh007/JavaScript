/*Return the number of contiguous subarrays whose sum equals k.
Input:
nums = [1, 1, 1]
k = 2

Output:
2
*/

function contigouseSubarray(arr, k) {
  let total = 0;
  let ps = 0;
  let mp = new Map();
  mp.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    ps += arr[i];
    if (mp.has(ps - k)) {
      total += mp.get(ps - k);
    }

    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
  }
  console.log(total);
  return total;
}
contigouseSubarray([1, 1, 1], 1);

/*Practice Set: Question 1

You are given a sorted array of integers nums and an integer target.

Return the number of distinct index pairs (i, j) such that:

i < j
nums[i] + nums[j] === target

Important: pairs are based on indices, not distinct values.

Example 1
nums = [1, 1, 2, 2, 3, 4]
target = 5

Output:4
 */

var countPairs = function (nums, target) {
  let total = 0;
  let s = 0;
  let e = nums.length - 1;

  while (s < e) {
    if (nums[s] + nums[e] < target) s++;
    else if (nums[s] + nums[e] > target) e--;
    else {
      if (nums[s] === nums[e]) {
        let n = e - s + 1;
        total += (n * (n - 1)) / 2;
        return total;
      }

      let leftCount = 1;
      let rightCount = 1;
      while (s < e && nums[s] === nums[s + 1]) {
        leftCount++;
        s = s + 1;
      }
      while (s < e && nums[e] === nums[e - 1]) {
        rightCount++;
        e = e - 1;
      }
      total += leftCount * rightCount;
      s++;
      e--;
    }
  }
  return total;
};

/*
Question 2

A monitoring system records the processing cost of consecutive requests:

costs = [2, 1, 5, 2, 3, 2]

Every value is a positive integer.

Given a threshold limit, return the length of the shortest contiguous sequence of requests whose total cost is at least limit.

If no such sequence exists, return 0.
*/

var minSubArrayLen = function (costs, limit) {
  let len = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;
  for (right; right < costs.length; right++) {
    sum += costs[right];

    while (sum >= limit) {
      len = Math.min(len, right - left + 1);
      sum -= costs[left];
      left++;
    }
  }

  return len === Infinity ? 0 : len;
};

/*Question 3

You are given an array of positive integers nums and an integer k.

Return the maximum length of a contiguous subarray whose sum is at most k.

Example 1
nums = [2, 1, 3, 1, 1, 1, 5]
k = 6

Output:

4 */

var maxSubArrayLen = function (nums, k) {
  let len = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  for (right; right < nums.length; right++) {
    sum += nums[right];
    while (sum > k) {
      sum -= nums[left++];
    }
    len = Math.max(len, right - left + 1);
  }
  return len;
};
/*Question 4

You are given an array nums.

Move all occurrences of 0 to the end in place, while preserving the relative order of all non-zero elements.

Return the modified array.

Example 1
nums = [0, 1, 0, 3, 12]

Output:

[1, 3, 12, 0, 0] */

var moveZeroes = function (nums) {
  let read = 0;
  let write = 0;
  for (read; read < nums.length; read++) {
    if (nums[read] != 0) {
      nums[write++] = nums[read];
    }
  }
  while (write < nums.length) {
    nums[write++] = 0;
  }
};
