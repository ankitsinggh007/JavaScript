/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
var twoSum = function(nums, target) {

    nums.sort((a,b)=>a-b);

    let i=0;
    let j=nums.length-1;

    while(i<=j){
        let sum=nums[i]+nums[j];

        if(sum>target){
            j--;
        }
        else if(sum<target) {
            i++
        }
        else return [i,j];
    }

};