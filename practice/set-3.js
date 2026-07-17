/* Prefix-Sum and Hashing */
/*
Question 1
You are given an integer array transactions, where values can be positive, negative, or zero.
Return the number of contiguous subarrays whose sum is exactly equal to target.
Example 1
transactions = [1, 2, 3]
target = 3
Output: 2
Valid subarrays:
[1, 2]
[3]

Example 2
transactions = [1, -1, 1, 1]
target = 1
Output:5
*/

function subarraySum(transactions, k) {
  let count = 0;
  let sum = 0;
  let mp = new Map();
  mp.set(0, 1);
  for (let i = 0; i < transactions.length; i++) {
    sum += transactions[i];
    if (mp.has(sum - k)) count += mp.get(sum - k);
    mp.set(sum, (mp.get(sum) || 0) + 1);
  }
  return count;
}

console.log("Q-1:", subarraySum([1, -1, 1, 1], 1));
/*
Question 2
You are given an integer array nums.
Return true if there exists a contiguous subarray of length at least 2 whose sum is 0.
Otherwise return false.
Example 1
nums = [4, 2, -3, 1, 6]
Output:true
Because: [2, -3, 1] has sum 0.
*/

function checkSubarraySum(nums) {
  let sum = 0;
  let mp = new Map();
  mp.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (mp.has(sum)) {
      if (i - mp.get(sum) >= 2) return true;
    } else {
      mp.set(sum, i);
    }
  }
  return false;
}

console.log("Q-2:", checkSubarraySum([4, 2, -3, 1, 6]));
/*Question 3
You are given an integer array nums and an integer k.
Return the number of contiguous subarrays whose sum is divisible by k.
Example 1
nums = [4, 5, 0, -2, -3, 1]
k = 5
Output:7
 */

function subarraysDivByK(nums, k) {
  let mp = new Map();
  let count = 0;
  mp.set(0, 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (mp.has(sum % k)) count += mp.get(sum % k);
    mp.set(sum % k, (mp.get(sum % k) || 0) + 1);
  }
  return count;
}

/*Question 4
You are given an array nums.
Return the length of the longest consecutive sequence of numbers.
The sequence does not need to be contiguous in the array.
Example 1
nums = [100, 4, 200, 1, 3, 2]
Output:
4
Because the longest consecutive sequence is:1, 2, 3, 4 */

function longestConsecutive(nums) {
  let set = new Set();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let curr = num;
    let count = 0;
    while (set.has(curr)) {
      curr++;
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
}
console.log("Q-4", longestConsecutive([100, 4, 200, 1, 3, 2]));
/*Question 5
You are given an array of strings words.
Group the anagrams together.
Example
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output can be in any order:
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
] 
  */
function groupAnagrams(words) {
  let result = [];
  let np = new Map();
  for (let i = 0; i < words.length; i++) {
    let str = words[i];
    let mp = new Map();
    for (let char of str) mp.set(char, (mp.get(char) || 0) + 1);
    let keys = "";
    let aplhabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of aplhabet) {
      if (mp.has(char)) {
        keys += char + mp.get(char);
      }
    }
    console.log("key", keys);
    if (np.has(keys)) {
      np.get(keys).push(str);
    } else {
      np.set(keys, []);
      np.get(keys).push(str);
    }
  }

  for (let [key, val] of np) {
    result.push(val);
  }
  return result;
}

console.log("Q-5", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/**Question 6
You are given an array of integers nums and an integer target.
Return the indices of two numbers such that they add up to target.
Assume exactly one valid answer exists, and you cannot use the same element twice.
Example
nums = [2, 7, 11, 15]
target = 9
Output:
[0, 1] */
function twoSum(nums, target) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(nums[i])) return [mp.get(nums[i]), i];
    mp.set(target - nums[i], i);
  }
}

console.log("Q-6:", twoSum([2, 7, 11, 15], 9));
/*Question 7
You are given an array nums.
Return the first number that appears only once.
If no such number exists, return -1.
Example 1
nums = [4, 5, 1, 2, 0, 4, 5, 2]
Output:1
 */
function firstUnique(nums) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (mp.get(nums[i]) === 1) return nums[i];
  }
  return -1;
}

/*Question 8
You are given an array nums and an integer k.
Return the top k most frequent numbers.
Example
nums = [1, 1, 1, 2, 2, 3]
k = 2
Output:
[1, 2]
Because:
1 appears 3 times
2 appears 2 times
3 appears 1 time 
*/
function topKfrequency(nums, k) {
  let mp = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
  }
  for (let [key, freq] of mp) {
    result.push([key, freq]);
  }
  result.sort(([key1, freq1], [key2, freq2]) => freq2 - freq1);
  return result.slice(0, k).map((obj) => obj[0]);
}

console.log(topKfrequency([1, 1, 1, 2, 2, 3], 2));
