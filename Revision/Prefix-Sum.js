
/*
Problem:
Given an integer array nums and an integer k, return the total number of continuous subarrays whose sum equals k.

Example:

Input: nums = [1, 1, 1], k = 2
Output: 2
Explanation: subarrays [1,1] (first two) and [1,1] (last two) both sum to 2.
*/
function subarrayCountWithKSum(nums, k) {

    let mp = new Map();
    mp.set(0, 1);
    let count = 0;
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (mp.has(currSum - k))
            count += mp.get(currSum - k);
        mp.set(currSum, (mp.get(currSum) || 0) + 1);
    }
    console.log(count);
    return count;

}
subarrayCountWithKSum([1, 1, 1], 2);
/*
Problem:
Given an integer array nums of length n, and an integer target, 
return true if there exists a continuous subarray of length at least 2 that sums to target. 
Otherwise, return false.

Example 1:

Input: nums = [23, 2, 4, 6, 7], target = 6
Output: true
Explanation: [2,4] or [4,6] sums to 6.
*/

function subarrayPresent(nums, k) {
    let currSum = 0;
    let mp=new Map();
        mp.set(0,-1);

    for (let i = 0; i < nums.length; i++) {

        currSum += nums[i];
        if (mp.has(currSum - k)) {
                let j= mp.get(currSum-k);
                if(i-j>1) return true;
                
        }
        if(!mp.has(currSum))
            mp.set(currSum,i);

    }

    return false;


}

/*
Problem (classic, LeetCode 53):

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

Example:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6
*/
function maxSubArray(nums) {

    let maxSum= -Infinity;//what the dufference between using -Infinity and Number.MIN_VALUE ,and what should we use whwnever setting such value?

    let currSum=0;
    for(let i=0;i<nums.length;i++){

        currSum+=nums[i];
        maxSum=Math.max(maxSum,currSum);
        if(currSum<0)currSum=0;
    }
}
/*
Problem (classic style):

Given an integer array nums and an integer k, return the number of (non-empty) subarrays that have a sum divisible by k.

Example 1:

Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with sum divisible by 5:
[4,5,-2,-3,1], [5], [5,0], [0], [0,-2,-3], [-2,-3], [-2,-3,1]
*/
function subarrayDivisibleByK(nums,k){
    let currSum=0;
    let count=0;
    let mp=new Map();
    mp.set(0,1);

    for(let i=0;i<nums.length;i++){
        currSum+=nums[i];
        let mod=((currSum%k)+k)%k;
        if(mp.has(mod)){
            count+=mp.get(mod);
            mp.set(mod,mp.get(mod)+1);
        }
        else
            mp.set(mod,1);

    }
    console.log(count);
    return count;
}


subarrayDivisibleByK([4,5,0,-2,-3,1],5);

