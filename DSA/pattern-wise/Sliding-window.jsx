
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
/*
Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.
Note: A subarray is a contiguous part of any given array.
*/
function  maximumSumSubarray(arr, k) {
    // code here
    let [left,right,size,sum,max]=[0,0,0,0,0];
    
    while(right<arr.length){
        sum+=arr[right];
        
        if(right-left+1>k){
            sum-=arr[left];
            left++;
        }
        
        max=Math.max(sum,max);
        
        right++;
        
    }
    return max;
}

/*
643. Maximum Average Subarray I
*/
var findMaxAverage = function (nums, k) {

    let currSum = 0;
    for(let i = 0; i < k; i++) {
        currSum += nums[i];
    }
    let maxSum = currSum;

    for (let i = k ; i < nums.length; i++) {
        currSum += nums[i] - nums[i - k];
        maxSum = Math.max(currSum, maxSum);
    }
    return +(maxSum / k).toFixed(5);

};
/*
Maximum Sum of Distinct Subarrays With Length K
*/

var maximumSubarraySum = function (nums, k) {
    let maxSum = 0;
    let sum = 0;
    let mp=new Map()
    for (let i = 0; i < k; i++) {
        sum += nums[i];
        mp.set(nums[i],(mp.get(nums[i]) || 0)+1);
     
    }
    if(mp.size==k){
        maxSum=sum;
    }

    for(let i=k;i<nums.length;i++){
        sum+=nums[i] - nums[i-k];
        
        mp.set(nums[i],(mp.get(nums[i]) || 0)+1);

        if (mp.get(nums[i-k])>1) {
            mp.set(nums[i-k], mp.get(nums[i-k]) - 1);
        }
        else{
            mp.delete(nums[i-k]);
        } 

        if(mp.size==k){
            maxSum=Math.max(maxSum,sum);
        }
    }
    return maxSum;
};
/*Minimum Size Subarray Sum */
var minSubArrayLen = function(target, nums) {
    let left = 0, sum = 0, minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};
/*Longest Substring with At Most K Distinct Characters */
function kDistinctChars(k,str){
    let [left,maxLen]=[0,0];
    let mp=new Map();
    for( let right=0;right<str.length;right++){
            mp.set(str[right],(mp.get(str[right]) || 0 ) +1);

            while(mp.size>k){
                   
                if(mp.get(str[left])>=2){
                    mp.set(str[left],mp.get(str[left])-1);
                }else if(mp.get(str[left])==1){
                    mp.delete(str[left]);
                }    
                left++;
            }    
            
        
        if(mp.size<=k)
        maxLen=Math.max(maxLen,right-left+1);
    }
    return maxLen;
}