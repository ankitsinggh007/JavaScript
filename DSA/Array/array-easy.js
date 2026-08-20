/* Q1.Given an array arr[]. The task is to find the largest element and return it.
 Constraints:
 1 <= arr.size()<= 10^6
 0 <= arr[i] <= 10^6
*/
console.log("solution-1")

function largest(arr) {
    if(arr.length==0) return;
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            
        }
      
    }
      return max;
}
/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

2 ≤ arr.size() ≤ 10^5
1 ≤ arr[i] ≤ 10^5

*/
console.log("solution-2");
function helper(arr){
    if(arr.length==0) return -1 ;
    
    let max=-1;
       
    
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            
        }
    }
    
    
    return max;
};
function getSecondLargest(arr) {
    
    let max=this.helper(arr);
    // console.log(max,"max")
    let second_max=-1;
    
    for(let i=0;i<arr.length;i++){
        if(second_max<arr[i] && arr[i]<max){
            second_max=arr[i];
        }
        // console.log(second_max,"second_max");
    }
    
    return second_max;
}
/*
leetcode[1752] Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.


*/
console.log("solution-3");
let check = function(nums) {
    
    let count = 0;
   let n = nums.length;

   for (let i = 0; i < n; i++) {
       if (nums[i] > nums[(i + 1) % n]) {
           count++;
       }
       if (count > 1) {
           return false;
       }
   }

   return true;

};
/*
26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

let j=0;
let pointer=1;
let arr=[1,1,2,2,3,3,4,4,5];
for(let i=1;i<arr.length;i++){
    if(arr[j]!=arr[i]){
        j++;
        arr[j]=arr[i];
        pointer++;
    }
    console.log(pointer,arr)
}



/*
189. Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


*/



var rotate = function(arr, k) {
    
    arr.reverse();
   
k=k%arr.length;
let s=0;
let e=k-1;
while(s<=e){
    let temp=arr[s];
    arr[s]=arr[e];
    arr[e]=temp;
    s++;e--;
}
s=k;
e=arr.length-1;
while(s<e){
    let temp=arr[s];
    arr[s]=arr[e];
    arr[e]=temp;
    s++;e--;
}

// console.log(arr,"num")
// return nums
};
/*
Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.
*/
function searchInSorted(arr, k) {
    for (let i=0;i<arr.length;i++){
        
        if(k==arr[i]){
            return true;
        }
    }
    return false;
}
/*
Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
*/
function findUnion(a, b) {
        
    let i=0;let j=0;
        let result=[];
    while(i<a.length && j<b.length){
        if (a[i] === b[j]) {
        if (result[result.length - 1] !== a[i]) {
            result.push(a[i]);
        }
        i++;
        j++;
    } 
        else if(a[i]<b[j] ){
            if(a[i]!=result[result.length-1]){
            result.push(a[i]);    
            }
            
            i++;
            
        }
        else{
            if(b[j]!=result[result.length-1]){
            result.push(b[j]);
            
            }
            j++;
        }
    }
    
    while(i<a.length){
        if(result[result.length-1]!=a[i]){
           
            result.push(a[i]);
        }
        i++;
    }
     while(j<b.length) {
    if (result[result.length - 1] !== b[j]) {
        result.push(b[j]);
    }
    j++;
}
    return result;
    
}
/*
485. Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array.


*/
var findMaxConsecutiveOnes = function(nums) {

    let max=0;
    let num =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) num=0;
        else {
            num++;
            max=Math.max(max,num);
        }
       
    }
    return max;

    
};
/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
constrain
You must implement a solution with a linear runtime complexity and use only constant extra space.*/

var singleNumber = function(nums) {
    let result=0;
    for(let i=0;i<nums.length;i++){
        result=nums[i]^result;
    }

    return result;
};







const arrays=[9,8,7,6,5,4,3,2,1,0] , n=10 ;
const arrays2=[19,18,17,16,15,14,13,12,11,10]  ;

console.log(arrays[2]) ;
console.log(arrays["2"]) ;
console.log(arrays["2"]) ;
console.log(arrays["02"]) ;
arrays.length=12;
console.log(arrays);
console.log(arrays.concat(arrays2));