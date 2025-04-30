
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
/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

var longestOnes = function(nums, k) {
    
    let [left,right,maxLen,countZero]=[0,0,0,0];

    while(right<nums.length){
        if(nums[right]==0){
            countZero++;
        
        }
        // shrink untill countZero!=k
        while(countZero>k){
            if(nums[left]==0){
                countZero--;
            }
            left++;
        }

        maxLen=Math.max(right-left+1,maxLen);
        right++;
    }

    return maxLen;

};