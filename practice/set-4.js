/*Binary Search && Intervals */

/*Q1 — Binary Search Basics
You are given a sorted array nums in ascending order and a target.
Return the index of target. If it does not exist, return -1.
Example 1
nums = [1, 3, 5, 7, 9, 11]
target = 7
Output:3
 */

function binarySearch(nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    // we need to check from left to right includes
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target)
      right = mid - 1; //mid alreaduy checked so we can assign mid+1;
    else left = mid + 1;
  }
  return -1;
}

console.log("Q-1: ", binarySearch([1, 3, 5, 7, 9, 11], 7));
/*Q2 — Insert Position / Lower Bound
You are given a sorted array nums and a target.
Return the index where target should be inserted so that the array remains sorted.
Example 1
nums = [1, 3, 5, 6]
target = 5
Output:2 
*/

function searchInsert(nums, target) {
  let [left, right] = [0, nums.length];
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

/*34. Find First and Last Position of Element in Sorted Array */

var searchRange = function (nums, target) {
  let [left, right] = [0, nums.length];
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else left = mid + 1;
  }
  if (nums[left] !== target) return [-1, -1];
  let first = left;
  [left, right] = [0, nums.length];
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else right = mid;
  }

  return [first, left - 1];
};
/* koko eat banana */
var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (helper(piles, mid, h)) right = mid;
    else left = mid + 1;
  }

  return left;
};

function helper(piles, mid, h) {
  for (let i = 0; i < piles.length; i++) {
    h -= Math.ceil(piles[i] / mid);
  }

  return h >= 0 ? true : false;
}

/*Search in roated array*/
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (target <= nums[mid] && nums[left] <= target) {
        right = mid - 1;
      } else left = mid + 1;
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else right = mid - 1;
    }
  }
  return -1;
}
