/*Practice set-2*/

/*Q1.
You are given a string str.
Return the length of the longest substring containing at most k distinct characters.
Example 1
str = "eceba"
k = 2
Output:3
 */
function longestSubstring(str, k) {
  let len = 0; // the longest size could be 0 at start.
  let [s, e, mp] = [0, 0, new Map()];
  for (e; e < str.length; e++) {
    mp.set(str[e], (mp.get(str[e]) || 0) + 1);

    while (mp.size > k) {
      mp.set(str[s], mp.get(str[s]) - 1);
      if (mp.get(str[s]) === 0) mp.delete(str[s]);
      s++;
    }
    len = Math.max(len, e - s + 1);
  }
  return len;
}
/*Question 2
You are given an array height, where height[i] represents a vertical line at index i.
Choose two lines such that together with the x-axis they form a container.
Return the maximum amount of water the container can store.
Example 1
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output:49 
*/

function maxStorage(height) {
  let maxArea = 0;
  let s = 0;
  let e = height.length - 1;

  while (s < e) {
    let width = e - s;
    let currHeight = Math.min(height[s], height[e]);
    let area = width * currHeight;

    maxArea = Math.max(maxArea, area);

    if (height[s] < height[e]) {
      s++;
    } else if (height[s] > height[e]) {
      e--;
    } else {
      s++;
      e--;
    }
  }

  return maxArea;
}
/*
Question 3
You are given an array nums containing only:
0, 1, 2
Sort the array in place so that all 0s come first, then 1s, then 2s.
Do not use built-in sort.
Example
nums = [2, 0, 2, 1, 1, 0]
Output:[0, 0, 1, 1, 2, 2]
*/

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
function sortColors(nums) {
  let [low, mid, high] = [0, 0, nums.length - 1];

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      swap(nums, mid, high);
      high--;
    } else {
      mid++;
    }
  }

  return nums;
}
