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
for(let i=1;i<arr.length;i++){
    if(arr[j]!=arr[i]){
        j++;
        arr[j]=arr[i];
        pointer++;
    }
    console.log(pointer,arr)
}