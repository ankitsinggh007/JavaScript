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