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
/*
Problem:Given a string s and an integer k, return the length of the longest substring that 
contains at most k distinct characters.

Example:
Input: s = "eceba", k = 2  
Output: 3  
Explanation: "ece" is the longest substring with 2 distinct chars.
*/

function longestSubstringKDisttinct(s, k) {
    let mp = new Map();
    let [left ,right,maxLength] = [0, 0, 0];
    
    while(right<s.length){
        mp.set(s[right],(mp.get(s[right])||0)+1);

        right++;

        while(mp.size>k){
            mp.set(s[left],mp.get(s[left])-1);
            if(mp.get(s[left])==0){
                mp.delete(s[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left);

    }



    return maxLength;
}
/*
Problem:
Given an array of positive integers nums and an integer target, return the length of the smallest contiguous subarray whose sum is greater than or equal to target. If no such subarray exists, return 0.

Example:

Input: nums = [2,3,1,2,4,3], target = 7
Output: 2
Explanation: [4,3] is the shortest subarray
*/
function minSubArraylen(nums,target){
    let [left,right,minSize,sum]=[0,0,Infinity,0];

    while(right<nums.length){
        sum+=nums[right];
        right++;
        while(sum>=target){
            minSize=Math.min(minSize,right-left);
            sum-=nums[left];
            left++;
        }
    }
    return minSize===Infinity?0:minSize;
}

/*
Problem:
Given two strings s1 and s2, return true if s2 contains a permutation of s1 as a substring, else return false.

Example:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: "ba" is a permutation of "ab" in s2
*/
//leetcode question no. 
    
function checkInclusion(s1, s2) {
    const need = new Map();
    const window = new Map();
    for (let char of s1) {
        need.set(char, (need.get(char) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let valid = 0;

    while (right < s2.length) {
        let char = s2[right];
        right++;
        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        }

        while (right - left >= s1.length) {
            if (valid === need.size) {
                return true;
            }
            let d = s2[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return false;
}