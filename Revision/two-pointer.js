/*
Problem 1 (Pair Sum in Sorted Array):

Given a sorted array nums of integers and an integer target, return any pair of indices (i, j) (0-based, i < j) such that nums[i] + nums[j] == target.
If no such pair exists, return -1.

Constraints:

1 <= nums.length <= 1e5

-1e9 <= nums[i], target <= 1e9 (non-decreasing order)
*/
function pairSum(nums, target) {
    let [i, j] = [0, nums.length - 1];
    while (i < j) {
        let d = nums[i] + nums[j];
        if (d === target) {
            return [i, j];
        } else if (d < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return -1;
}
/*
Problem 2 (Palindrome Check):
Given a string s, return true if it is a palindrome, and false otherwise.
Ignore case and non-alphanumeric characters.
Examples:
"A man, a plan, a canal: Panama" → true
"race a car" → false
*/
//
function checkPlaindrom(s) {

    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let [l, r] = [0, str.length - 1];

    while (l < r) {
        if (str[l] !== str[r]) return false;
        else {
            l++;
            r--;
        }
    }
    return true;
}
//max water container
var maxArea = function (height) {

    let maxWater = 0;

    let [l, r] = [0, height.length - 1];

    while (l < r) {

        maxWater = Math.max(Math.min(height[l], height[r]) * (r - l), maxWater);
        if (height[l] < height[r]) {
            l++;
        }
        else {
            r--;
        }

    }
    return maxWater;

};
//283. Move Zeroes

var moveZeroes = function (nums) {

    let read = 0;
    let write = 0

    for (read; read < nums.length; read++) {
        if (nums[read] != 0) {
            nums[write++] = nums[read];
        }

    }
    while (write < nums.length) {
        nums[write++] = 0;
    }


};
//practice set //
// 977 leetcode



function sortedSquares(nums) {

    let arr = new Array(nums.length);

    let [l, r] = [0, nums.length - 1];
    let last = nums.length - 1;
    while (l < r) {
        if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            arr([last--] = nums)[r];
            r--;
        } else if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            arr[last--] = nums[l];
            l++;
        }
        else {
            arr[last--] = nums[r];
            arr[last--] = nums[r];
            r--;
            l++;
        }
    }
    arr[last] = nums[l];

    arr = arr.map((ele) => ele * ele);
    return arr;
};
//palindrom-2

function helper(s,l,r){

    while(l<r){
        if(s[l]!==s[r]) return false;
        l++;
        r--;
    }
    return true;
}

var validPalindrome = function(s) {
    let [l,r]=[0,s.length-1];
    while(l<r){
        if(s[l]!=s[r] ){
            return helper(s,l+1,r)||  helper(s,l,r-1)    
        }

        l++;
        r--;
    }
    return true;



};
