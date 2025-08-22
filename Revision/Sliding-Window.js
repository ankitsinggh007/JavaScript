//sliding- window
/*
Problem:
Given an array of integers nums and an integer k, return the maximum sum of any contiguous subarray of size k.

Example:
Input: nums = [2, 1, 5, 1, 3, 2], k = 3
Output: 9
Explanation: subarray [5,1,3] has the maximum sum = 9
 */
function maximumSumArr(nums, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;
    let left = 0;
    let right = k;
    while (right < nums.length) {
        windowSum += nums[right] - nums[left];
        maxSum = Math.max(maxSum, windowSum);
        left++;
        right++;
    }
    return maxSum;
}
/*
Problem : Given a string s, find the length of the longest substring without repeating characters.
Example:
Input: "abcabcbb"  
Output: 3   // "abc"
*/
function longestSubstring(s) {

    const set = new Set();
    let left = 0;


    let right = 0;
    let maxLength = 0;
    while (right < s.length) {

        if (set.has(s[right])) {
            let char = s[right];
            while (set.has(char)) {
                set.delete(s[left]);
                left++;
            }
        }
        set.add(s[right]);
        right++;
        maxLength = Math.max(maxLength, right - left);
    }
    return maxLength;


}