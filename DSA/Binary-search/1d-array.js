/*
Implement binary Search
*/
console.log("question-1");

var binarySearch = function(nums, target) {
    
    let low=0;
    let high=nums.length-1;
    while(low<=high){
        let mid=Math.trunc((low+high)/2);
        if(nums[mid]==target) return mid;
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return -1;
};

/*
Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest 
element in arr[] that is less than or equal to k. This element is called the "floor" of k. If such an element does not exist, return -1.
*/
console.log("question-2");
 function findFloor(arr, k) {
        // your code here
        let ans=-1;
        let low=0;
        let high=arr.length-1;
        
        while(low<=high){
            let mid=Math.trunc((low+high)/2);
            
                if(arr[mid]==k){ ans=mid;
                return mid;}
                else if(arr[mid]>k){
                    high=mid-1;
                }
                else {
                    ans=mid;
                    low=mid+1;
                }
        }
        return ans;
        
    }

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
    */
console.log("question-3");
var searchInsert = function(nums, target) {
    let low=0;
    let high=nums.length-1;
    let mid;
    while(low<=high){
         mid=Math.trunc((low+high)/2);
        if(nums[mid]==target) return mid;
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }

    return low;
};
/* 
Problem statement
You're given a sorted array 'a' of 'n' integers and an integer 'x'.
Find the floor and ceiling of 'x' in 'a[0..n-1]'.
Note:
Floor of 'x' is the largest element in the array which is smaller than or equal to 'x'.
Ceiling of 'x' is the smallest element in the array greater than or equal to 'x'.

*/
console.log("question-4");
function getFloorAndCeil(arr, n, x) {
    let low = 0;
    let high = n - 1;

    // Initialize the pair with default values
    let p = [-1, Infinity];

    // Check if x is outside the bounds of the array
    if (x < arr[low]) return [-1, arr[low]];  // No floor, but a possible ceiling
    if (x > arr[high]) return [arr[high], -1]; // No ceiling, but a possible floor

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);  // Correctly calculate the mid index

        if (arr[mid] === x) {
            // If x is found, both floor and ceiling are x
            p = [x, x];
            return p;
        } else if (arr[mid] < x) {
            // Move towards the right half
            low = mid + 1;
            p[0] = arr[mid];  // Update the floor value
        } else {
            // Move towards the left half
            high = mid - 1;
            p[1] = arr[mid];  // Update the ceiling value
        }
    }

    return p; // Return the floor and ceiling values
}

// Example usage:
const arr = [1, 2, 8, 10, 10, 12, 19];
const x = 5;
console.log(getFloorAndCeil(arr, arr.length, x));  // Output: [2, 8]


/*
34. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/
console.log("question-5");

const searchRange = function(nums, target) {

    let starOcurrence=-1;
    let endOcurrence=-1;
    let low=0;
    let high=nums.length-1;
    while(low<=high){
        let mid=Math.trunc((low+high)/2);
        if(nums[mid]==target){
            starOcurrence=mid;
            high=mid-1;
        }
        else if(nums[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    low=0;
    high=nums.length-1;
    if(starOcurrence==-1) return [starOcurrence,endOcurrence];
    while(low<=high){
        let mid=Math.trunc((low+high)/2);
        if(nums[mid]==target){
            endOcurrence=mid;
            low=mid+1;
        }
        else if(nums[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }

    return [starOcurrence,endOcurrence]

};
// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]
console.log("question-6");
class Solution {
    // Function to count the occurrences of x in the array.
    binarySearch (nums,target,findFirst) {
        let low = 0, high = nums.length - 1, result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                result = mid;
                findFirst ? (high = mid - 1) : (low = mid + 1); // Move left for first, right for last
            } else if (nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    };
    
    searchRange(nums, target) {
    return [this.binarySearch(nums,target,true), this.binarySearch(nums,target,false)];
};

    countFreq(arr, target) {
        const pair=this.searchRange(arr,target);
        if(pair[0]==-1) return 0;
        return pair[1]-pair[0]+1;
        // your code here
    };
};

/*
33. Search in Rotated Sorted Array
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
*/
console.log("question-7");
const pivot=function(nums){
    let low=0;
    let high=nums.length-1;

    while(low<=high){

        m=Math.floor((low+high)/2);
        if(nums[low] <= nums[m] && nums[m] <= nums[high]) return 0 ;
        //if this true array is sorted no need to find pivot 
        if(m>low && nums[m]<nums[m-1])return m;
        if(m<high&& nums[m]>nums[m+1]) return m+1;

        if(nums[low]<nums[m]){
            low=m+1;
        }
        else {
            high=m-1;
        }
    }
    return low;

 }
 const binarySearch=function (nums,target,low,high){
    while(low<=high){
       let m=Math.floor((low+high)/2);
        if(nums[m]==target) return m;
        else if(nums[m]>target){
            high=m-1;
        }
        else{
            low=m+1;
        }
    }
    return -1;
 }
var search = function(nums, target) {
//   find pivot   O(logn)
//  apply b.s (l-pivot),or ((pivot+1)-h)

    const p=pivot(nums);
    if ( target>=nums[0] && target <= nums[p - 1]) {
        return binarySearch(nums, target, 0, p - 1);
    }

    // Otherwise, search in the right sorted part
    return binarySearch(nums, target, p, nums.length - 1);

    // return result;


};
/*
153. Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
*/
console.log("question-8");

var findMin = function(nums) {

    let low=0;let high=nums.length-1;

    while(low<=high){

let mid = Math.floor(low + (high - low) / 2);

if(mid>low && nums[mid]<nums[mid-1])return nums[mid];
    if(mid<high&& nums[mid]>nums[mid+1]) return nums[mid+1];

    
        if(nums[low]<nums[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return nums[0];
};
/*
Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
After 1st Rotation : [9, 2, 4, 6]
After 2nd Rotation : [6, 9, 2, 4]
*/
    console.log("question-9")
    class Solution {
        pivot(nums){
        let low=0;
        let high=nums.length-1;
    
        while(low<=high){
    
            let m=Math.floor((low+high)/2);
            if(nums[low] <= nums[m] && nums[m] <= nums[high]) return 0 ;
            //if this true array is sorted no need to find pivot 
            if(m>low && nums[m]<nums[m-1])return m;
            if(m<high&& nums[m]>nums[m+1]) return m+1;
    
            if(nums[low]<nums[m]){
                low=m+1;
            }
            else {
                high=m-1;
            }
        }
        return low;
    
     }
        findKRotation(arr) {
            // Code Here
            return this.pivot(arr);
        }
    }
    
    /*
    Square Root
    Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.
Floor value of any number is the greatest Integer which is less than or equal to that number
    */
    console.log("question-10");
   function  floorSqrt(n) {
        let low=1;
        let high=n;
        
        while(low<=high){
            let mid=Math.floor(low+(high-low)/2);
            
            if(mid*mid<=n && (mid+1)*(mid+1)>n) return mid;
            else if(mid*mid<n){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
                
        }
        return low;
    }