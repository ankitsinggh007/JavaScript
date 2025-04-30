
/*
485. Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/
var findMaxConsecutiveOnes = function(nums) {

    let maxCount=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            maxCount=Math.max(count,maxCount);
            count=0;
        }
        else{
            count++;
        }
        if(i==nums.length-1){
             maxCount=Math.max(count,maxCount);
        }
    }



    return maxCount
};