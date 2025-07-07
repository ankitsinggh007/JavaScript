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