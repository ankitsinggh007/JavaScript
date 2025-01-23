/*
1.Two sum 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

console.log("solution-1")
// logic
// 1. create a map to store the index of the element
// 2. iterate through the array and store the index of the element in the map
// 3. iterate through the array and find the difference between the target and the element
// 4. check if the difference is present in the map and the index is not the same as the current index
// 5. return the indices of the elements
var twoSum = function(nums, target) {
    const mp=new Map();

    for(let i=0;i<nums.length;i++){
        mp.set(nums[i],i);
    }

    for(let i=0;i<nums.length;i++){
        let y=target-nums[i];

        if(mp.has(y) && i!=mp.get(y) ){
            return [i,mp.get(y)];
        }
    }
    
};
/*
2.Sort color
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
*/


console.log("solution-2")
var sortColors = function(nums) {
    let noOfZero=0;
    let noOfOne=0;
    let noOfTwo=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==0)noOfZero++;
        else if (nums[i]==1)noOfOne++
        else{
              noOfTwo++;
        }
    }
    let i=0;
 while(noOfZero>0){
    nums[i]=0;
    i++;
    noOfZero--;
 }
 while(noOfOne>0){
    nums[i]=1;
    i++;
    noOfOne--;
 }
  while(noOfTwo>0){
    nums[i]=2;
    i++;
    noOfTwo--;
 }
    
};
/*
Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
console.log("solution-3")
var majorityElement = function(nums) {
    
    let candidate=null;
    let count=0;

    for(let i=0;i<nums.length;i++){
        
        if(count==0){
            candidate=nums[i];
        }
        
        if(candidate==nums[i]){
            count++;
        }
        else {
            count--;
        }

    }
    return candidate;
};
/*
4. Maximum Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/

console.log("solution-4")
var maxSubArray = function(nums) {
    let sum=0;
    let maxi=nums[0];
for(let i=0;i<nums.length;i++){
    sum+=nums[i];
    maxi=Math.max(maxi,sum);
    if(sum<0) sum=0;
}
return maxi;


};

/*
2149. Rearrange Array Elements by Sign
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
You should return the array of nums such that the the array follows the given conditions:
Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
*/
console.log("solution-5")
console.log('first solutin');
const Accumulate1=function(nums){
    let j=0;
    let k=nums.length/2;
    let i=0;
    let arr=[];
    while(i<nums.length){
        if(nums[i]>0)arr[j++]=nums[i]
        else arr[k++]=nums[i];
        i++;
    }
    return arr;


 }
var rearrangeArray1 = function(nums) {
    let arr=Accumulate1(nums);
    i=1;
    j=0;
    nums[0]=arr[j++];
    k=nums.length/2;
    while(i<nums.length){
        if(nums[i-1]>0) nums[i++]=arr[k++];
        else nums[i++]=arr[j++];
    }
    return nums;
};
// t.c=O(n) 
// s.c=O(n)
console.log('second solution');


var rearrangeArray1 = function(nums) {

    let pos=0;
    let neg=1;
    i=0;

let array=[];
    while(i<nums.length){
        if(nums[i]>0){
            array[pos]=nums[i];
            pos+=2;
        }
        else{
            array[neg]=nums[i];
            neg+=2;
        }
        i++;
    }
    return array; 

};
/**
 31. Next Permutation
 The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
 If such arrangement is not possible, the array must be rearranged as the lowest possible order
 example :-arr = [1,2,3] is [1,3,2]
                 [3,2,1] is [1,2,3]
 */
console.log("solution-6")

var nextPermutation = function(nums) {
    
    // find pivot-> index of no. wich doewn't follow nums[i]<num[i+1];

    let n=nums.length-1;
    let p=-1;

    for(let i=n-1;i>=0;i--){
        if(nums[i]<nums[i+1]){
            p=i;
            // console.log(p,"p")
            break;
        }
    }
    if(p==-1) return nums.reverse()
    let j;
    for( j=n;j>p;j--){
        if(nums[p]>=nums[j]){
            continue;
        }
        else break;
    }
    
    [nums[p],nums[j]]=[nums[j],nums[p]];
        
    let m=p+1;
    let z=n;
    while(m<z){
        [nums[m],nums[z]]=[nums[z],nums[m]];
        m++;
        z--;
    }
    return nums;

};
/*

 128. Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */
console.log("solution-7")
var longestConsecutive = function(nums) {
    let S=new Set();
    for(let i=0;i<nums.length;i++){
        S.add(nums[i])
    }
    let maxi=0;
    for (const value of S) {
    if(S.has(value-1)){
            continue;
        }
       else{
        let count=1;
        let val=value;
         while(S.has(val+1)){
                count++;
                val++;
            }
            maxi=Math.max(maxi,count);
        }
       }

      
           return maxi;    
    
     
};
/*
73. Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
*/

console.log("solution-8")
var setZeroes = function(matrix) {
    let m=matrix.length
    let n=matrix[0].length;
    let row=new Set();
    let column=new Set();
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                row.add(i)
                column.add(j)
            }
        }
    }
    
    for(const value of row){
        for(let i=0;i<n;i++){
            matrix[value][i]=0;
        }
    }
    for(const value of column){
        for(let i=0;i<m;i++){
            matrix[i][value]=0;
        }
    }




    console.log(matrix)
    
};

    console.log("solution-8||alternative");
    