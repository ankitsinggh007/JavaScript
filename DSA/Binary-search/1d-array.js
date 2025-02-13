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