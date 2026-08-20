// find # of subarray having sum of k.
var subarraySum = function(nums, k) {
   //store prefix sum first
    let prefixSum=new Map([[0,1]]);
    let count=0;
    let sum=0;
    for(let i =0;i<nums.length;i++){
            sum+=nums[i];
            let value=sum-k;
            if(prefixSum.has(value)){
                count+=prefixSum.get(value);
            }
                prefixSum.set(sum,(prefixSum.get(sum)||0)+1);


            

    }
    return count ;

};
// find max length of subarray having sum == k
var maxSubArrayLen = function(nums, k) {
    let mp=new Map([[0,-1]]);
        let high=-1;
        let sum=0;
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
            let val=sum-k;
            //check in lookup
            if(mp[val]!=undefined){
                high=Math.max(high,i-mp[val]);
            }
            if(mp[sum]!=undefined)
            mp[sum]=i;
            
        }
        console.log(high)
        return high;
        
};
//continous subarray sum

var checkSubarraySum = function(nums, k) {
    
    let lookup=new Map([[0,-1]]);

    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let val=sum%k
        if(i>0 &&lookup.has(val)&& i-lookup.get(val)>=2){
            return true;
        }
        if(!lookup.has(val)){
            lookup.set(val,i)
        }
    }
    return false;
};
//Contiguous Array

var findMaxLength = function(nums) {
    // transform into 0 -> -1
    for (let i=0;i<nums.length;i++){
            if(nums[i]==0) nums[i]=-1;
    }
    console.log(nums,"nums")
    let mp= new Map([[0,-1]]);
    let sum=0;
    let maxLength=0
    for(let i=0;i<nums.length;i++){
            sum+=nums[i];
        if(mp.has(sum)){
                maxLength = Math.max(maxLength,i - mp.get(sum));

        }else{
            mp.set(sum,i);
        }
    }
    return maxLength;

};

//maxiumu subarray sum 
var maxSubArray = function (nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
       sum=Math.max(sum+nums[i],nums[i])

        max = Math.max(sum, max);
    }
    return max;
};
//Maximum Sum Circular Subarray
var maxSubarraySumCircular = function(nums) {

    let max=nums[0];
    let min=nums[0];
    //max Subarray
    let maxSum=nums[0];
    let minSum=nums[0];
    let total=nums[0];
    for(let i=1;i<nums.length;i++){
        total+=nums[i];
        maxSum=Math.max(nums[i],maxSum+nums[i]);
        max=Math.max(max,maxSum);
        minSum=Math.min(nums[i],minSum+nums[i]);
        min=Math.min(minSum,min);
    }

    return max<0?max:Math.max(max,total-min);

};

// find maxSum with at most one deletion.
var maximumSum = function(arr) {
    let keep = arr[0];     // no deletion
    let del = arr[0];           // one deletion
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        del = Math.max(keep, del + arr[i]);
        keep = Math.max(arr[i], keep + arr[i]);
        maxSum = Math.max(maxSum, keep, del);
    }
    
    return maxSum;
};
