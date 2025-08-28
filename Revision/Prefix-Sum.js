
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