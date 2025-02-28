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
    /**
     Find nth root of m
     You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.
     */
    console.log("question-11");
   function  nthRoot(n, m) {
        let low=1;
        let high=m;
        
        while(low<=high){
            
            let mid=Math.floor(low+(high-low)/2);
            
            if(Math.pow(mid,n)==m) return mid;
            else if(Math.pow(mid,n)<m){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
            
        }
        return -1;
    }

    /*
    875. Koko Eating Bananas
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.
     */
    console.log("question-12");
    function isSufficient(piles, capacity) {
        let totalHours = 0;
        for (let bananas of piles) {
            totalHours += Math.ceil(bananas / capacity);
        }
        return totalHours;
    }
    
    function binarySearch(piles, low, high, hour) {
        let ans = high;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let totalHour = isSufficient(piles, mid);
            
            if (totalHour <= hour) {  // Fix: should include "equal"
                ans = mid;  // Store potential answer
                high = mid - 1;  // Try a smaller k
            } else {
                low = mid + 1;  // Increase speed
            }
        }
        return ans;
    }
    
    var minEatingSpeed = function(piles, h) {
        let maxPile = Math.max(...piles);  // No need to find min
    
        return binarySearch(piles, 1, maxPile, h);
    };
    /*
    1482. Minimum Number of Days to Make m Bouquets
You are given an integer array bloomDay, an integer m and an integer k.
You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1
    */
    console.log("question-13");

function isSufficient2(bloomDay,mid,m,k){
    let bouqet=0;
    let flower=0;

    for(let i=0;i<bloomDay.length;i++){
        if(bloomDay[i]<=mid){
            flower++;
            if(flower==k) {bouqet++;
            flower=0;}
        }
        else{
            flower=0;
        }
        if(bouqet>=m) return true;
        
    }
    return false;
}
var minDays = function(bloomDay, m, k) {
     if (m * k > bloomDay.length) return -1;
    let low=0;let high=Math.max(...bloomDay);
    let result=-1;
    while(low<=high){

        let mid=Math.floor((low+high)/2);

        if(isSufficient2(bloomDay,mid,m,k)){
            result=mid;
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return result;

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f

/*
1283. Find the Smallest Divisor Given a Threshold
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor,
divide all the array by it, and sum the division's result.
Find the smallest divisor such that the result mentioned above is less than or equal to threshold.
Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).
The test cases are generated so that there will be an answer.
*/
console.log("question-13");
const isMGood = function(nums, m, t) {
    let sum = 0;
    for (let num of nums) {
        sum += Math.ceil(num / m);
    }
    return sum;
};

var smallestDivisor = function(nums, threshold) {
    let low = 1, high = Math.max(...nums);
    let ans = high; // Store the best divisor found

    while (low <= high) {
        let m = Math.floor((low + high) / 2);
        let sum = isMGood(nums, m, threshold);

        if (sum <= threshold) {
            ans = m; // Store the valid divisor
            high = m - 1; // Try to find a smaller divisor
        } else {
            low = m + 1; // Increase divisor size
        }
    }

    return ans;
};
/*
1011. Capacity To Ship Packages Within D Days
A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
*/
console.log("question-14");
var shipWithinDays = function (weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce(((acc, curr) => acc + curr), 0);
    let ans=high;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let canShip =isMinWeight(weights, mid, days)
        if (canShip) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return ans

};
function isMinWeight(weights, min, days) {
    let sum = 0;
    for (let weight of weights) {
        if (sum + weight <= min) {
            sum += weight;
        }
        else {
            sum = weight;
            days--;
            if (days <= 0) {
                return false;
            }

        }
    }
    return true;

}
/*
1539. Kth Missing Positive Number
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.
*/
console.log("question-15");
var findKthPositive = function(arr, k) {
    let low = 0, high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1); 
        
        if (missing < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low + k;  
};
/*
Problem Statement: You are given an array 'arr' of size 'n' which denotes the position of stalls.
You are also given an integer 'k' which denotes the number of aggressive cows.
You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.
Find the maximum possible minimum distance.
*/

    console.log("question-16");

    function mSatisfyCows(arr,n,k,mid){

        let cows=1;
        let last=arr[0];

        for(let i=1;i<n;i++){

            if(arr[i]-last<mid){
                continue;
            }
            else{
                cows++;
                last=arr[i];
            }
            if(cows==k){
                break;
            }

        }
        return cows>=k;

    }
    function agressiveCow(arr,n,k){

        arr.sort((a,b)=>a-b);
        let low=1;
        let high=arr[n-1]-arr[0];

        while(low<=high){  //FIXME:why is that low<=high

            let mid=Math.floor((low+high)/2);

            let isSatisfied=mSatisfyCows(arr,n,k,mid);

            if(isSatisfied){
                low=mid+1;
            }
            else{
                high=mid-1;
            }


        }
        return high; //FIXME:why return high instead of low

    }